import postgres from "postgres";

export interface InboxMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  readAt: Date | null;
}

let client: ReturnType<typeof postgres> | null = null;
let schemaReady: Promise<void> | null = null;

function getClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured");
  }

  client ??= postgres(connectionString, {
    // Render's external PostgreSQL endpoints reject plaintext connections.
    ssl: "require",
    max: 5,
    idle_timeout: 20,
    connect_timeout: 10,
  });
  return client;
}

async function ensureSchema() {
  if (!schemaReady) {
    const sql = getClient();
    schemaReady = (async () => {
      await sql`
        create table if not exists portfolio_messages (
          id bigint generated always as identity primary key,
          name varchar(100) not null,
          email varchar(254) not null,
          message text not null,
          ip_hash varchar(64),
          created_at timestamptz not null default now(),
          read_at timestamptz
        )
      `;
      await sql`
        create index if not exists portfolio_messages_created_at_idx
        on portfolio_messages (created_at desc)
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  await schemaReady;
}

export async function createMessage(input: {
  name: string;
  email: string;
  message: string;
  ipHash: string;
}) {
  await ensureSchema();
  const sql = getClient();

  if (input.ipHash) {
    const [{ count }] = await sql<{ count: number }[]>`
      select count(*)::int as count
      from portfolio_messages
      where ip_hash = ${input.ipHash}
        and created_at > now() - interval '10 minutes'
    `;
    if (count >= 3) throw new Error("RATE_LIMITED");
  }

  await sql`
    insert into portfolio_messages (name, email, message, ip_hash)
    values (${input.name}, ${input.email}, ${input.message}, ${input.ipHash || null})
  `;
}

export async function getMessages(): Promise<InboxMessage[]> {
  await ensureSchema();
  const sql = getClient();
  const rows = await sql<
    {
      id: number;
      name: string;
      email: string;
      message: string;
      created_at: Date;
      read_at: Date | null;
    }[]
  >`
    select id, name, email, message, created_at, read_at
    from portfolio_messages
    order by created_at desc
  `;

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    message: row.message,
    createdAt: row.created_at,
    readAt: row.read_at,
  }));
}
