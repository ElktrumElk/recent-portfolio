export type ProjectCategory =
  | "mobile"
  | "web"
  | "library"
  | "cli"
  | "fullstack"
  | "tool";

export type ProjectStatus = "active" | "archived" | "maintenance";

export interface ProjectSEO {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: "website" | "article";
  };
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  techStack: string[];
  features: string[];
  repoLink: string;
  liveLink: string;
  dateStarted: string;
  dateEnded: string | null;
  icon: string;
  seo: ProjectSEO;
}

export const projects: Project[] = [
  {
    id: "newsroom",
    name: "Newsroom",
    slug: "newsroom",
    color: "#b91c1c",
    description:
      "A news application built for the Sierra Leone Broadcasting Corporation (SLBC) delivering reliable and updated news to users across mobile and web platforms.",
    longDescription:
      "Newsroom is the official digital news platform for SLBC, providing citizens with timely, accurate, and accessible news coverage. It features real-time news updates, categorized content, push notifications, and a seamless reading experience across both mobile and web.",
    category: "fullstack",
    status: "active",
    techStack: ["RSC", "Next.js", "elk-components", "TypeScript", "Python", "Flutter"],
    features: [
      "Real-time news updates",
      "Push notifications",
      "Category-based browsing",
      "Mobile & web versions",
      "Offline reading support",
    ],
    repoLink: "https://github.com/ElktrumElk/slbc-mobile",
    liveLink: "",
    dateStarted: "2026-08",
    dateEnded: null,
    icon: "Newspaper",
    seo: {
      title: "Newsroom — SLBC News Application",
      description:
        "A news application built for the Sierra Leone Broadcasting Corporation (SLBC) delivering reliable and updated news on mobile and web. Built with React, React Native, and Node.js.",
      keywords: [
        "Newsroom",
        "SLBC",
        "Sierra Leone news",
        "news app",
        "broadcasting app",
        "React Native news",
        "real-time news",
        "mobile news",
        "SLBC mobile",
        "news platform",
      ],
      openGraph: {
        title: "Newsroom — SLBC News Application",
        description:
          "Reliable and updated news for Sierra Leone, delivered via mobile and web.",
        type: "website",
      },
    },
  },
  {
    id: "merchant-core",
    name: "Merchant Core",
    slug: "merchant-core",
    color: "#205a8a",
    description:
      "A mobile application that helps business owners manage their operations, track sales, and handle inventory on the go.",
    longDescription:
      "Merchant Core is a comprehensive business management mobile application built with Flutter. It provides real-time sales tracking, inventory management, customer relationship tools, and financial reporting — all from a single dashboard.",
    category: "mobile",
    status: "active",
    techStack: ["Flutter", "Dart", "Node.js", "MySQL", "Firebase"],
    features: [
      "Real-time sales tracking",
      "Inventory management",
      "Customer CRM",
      "Financial reports",
      "Multi-device sync",
    ],
    repoLink: "https://github.com/favmaclegend-ops/MerchantCore",
    liveLink: "https://merchantcore.netlify.app",
    dateStarted: "2026-03",
    dateEnded: null,
    icon: "CreditCard",
    seo: {
      title: "Merchant Core — Business Management Mobile App",
      description:
        "A Web and Mobile application for business owners to manage operations, track sales, and handle inventory. Built with Flutter, Node.js, and MySQL.",
      keywords: [
        "Merchant Core",
        "business management app",
        "Flutter app",
        "inventory management",
        "sales tracking",
        "mobile POS",
        "business dashboard",
        "market",
        "market platform"
      ],
      openGraph: {
        title: "Merchant Core — Business Management Mobile App",
        description:
          "A Web and Mobile application for business owners to manage operations, track sales, and handle inventory.",
        type: "website",
      },
    },
  },
  {
    id: "elk-components",
    name: "elk-components",
    slug: "elk-components",
    color: "#2f6f9f",
    description:
      "A React component library with 50+ ready-made components and 205 built-in SVG icons for modern web applications.",
    longDescription:
      "elk-components is an open-source React UI library designed for rapid prototyping and production-ready interfaces. It ships with 50+ composable components, 205 hand-crafted SVG icons, built-in animation primitives, and full TypeScript support.",
    category: "library",
    status: "active",
    techStack: ["React", "TypeScript", "Motion", "CSS-in-JS"],
    features: [
      "50+ composable components",
      "205 built-in SVG icons",
      "Animation primitives",
      "Full TypeScript support",
      "Tree-shakable exports",
    ],
    repoLink: "https://github.com/ElktrumElk/elk-components",
    liveLink: "https://github.com/ElktrumElk/component-docs-seo",
    dateStarted: "2026-06",
    dateEnded: null,
    icon: "Layers",
    seo: {
      title: "elk-components — React Component Library",
      description:
        "An open-source React component library with 50+ components, 205 SVG icons, animation primitives, and TypeScript support.",
      keywords: [
        "elk-components",
        "React component library",
        "UI library",
        "React icons",
        "TypeScript components",
        "open source",
        "npm package",
        "react",
        "ui",
        "elk component"
      ],
      openGraph: {
        title: "elk-components — React Component Library",
        description:
          "50+ composable React components with 205 built-in SVG icons and animation primitives.",
        type: "website",
      },
    },
  },
  {
    id: "share",
    name: "Share",
    slug: "share-file-system",
    color: "#2f6fd0",
    description:
      "A secure file sharing platform where users exchange files via encrypted links with granular access controls.",
    longDescription:
      "Share is a full-stack file sharing platform that enables secure file transfers between users. It generates time-limited, encrypted sharing links and provides granular permission controls for uploaded files.",
    category: "fullstack",
    status: "active",
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "MySQL"],
    features: [
      "Encrypted sharing links",
      "Time-limited access",
      "File upload & download",
      "Access control permissions",
      "Link expiration",
    ],

    repoLink: "https://github.com/ElktrumElk/Share",
    liveLink: "https://share-two-vert.vercel.app/",
    dateStarted: "2024-03",
    dateEnded: null,
    icon: "ShareLogo",
    seo: {
      title: "Share — Secure File Sharing Platform",
      description:
        "A full-stack file sharing platform with encrypted links, time-limited access, and granular permissions. Built with Next.js and TypeScript.",
      keywords: [
        "file sharing platform",
        "secure file transfer",
        "encrypted links",
        "Next.js app",
        "file upload",
        "link sharing",
      ],
      openGraph: {
        title: "Share — Secure File Sharing Platform",
        description:
          "Secure file sharing via encrypted links with granular access controls.",
        type: "website",
      },
    },
  },
  {
    id: "front-devs",
    name: "Front Devs",
    slug: "front-devs",
    color: "#c9992e",
    description:
      "A developer community platform where developers showcase their work and connect with other developers and clients.",
    longDescription:
      "Front Devs is a community-driven platform that lets developers create profiles, showcase their projects, and connect with potential collaborators and clients. It features project portfolios, skill endorsements, and direct messaging.",
    category: "web",
    status: "active",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    features: [
      "Developer profiles",
      "Project showcases",
      "Skill endorsements",
      "Direct messaging",
      "Client connections",
    ],
    repoLink: "",
    liveLink: "",
    dateStarted: "2024-05",
    dateEnded: null,
    icon: "CloudUpload",
    seo: {
      title: "Front Devs — Developer Community Platform",
      description:
        "A platform for developers to showcase their work, build profiles, and connect with other developers and clients.",
      keywords: [
        "developer community",
        "developer portfolio",
        "coding platform",
        "dev networking",
        "project showcase",
        "freelance developers",
      ],
      openGraph: {
        title: "Front Devs — Developer Community Platform",
        description:
          "Showcase your work and connect with developers and clients.",
        type: "website",
      },
    },
  },
  {
    id: "interacter",
    name: "Interacter",
    slug: "interacter",
    color: "#2f6b53",
    description:
      "A lightweight Node.js library for accepting and processing user input in the command line.",
    longDescription:
      "Interacter is a minimal, zero-dependency Node.js library that simplifies CLI user input handling. It provides a clean API for prompts, confirmations, selections, and password inputs with built-in validation.",
    category: "cli",
    status: "maintenance",
    techStack: ["Node.js", "JavaScript", "npm"],
    features: [
      "Zero dependencies",
      "Type definitions included",
      "Input validation",
      "Promise-based API",
      "Color support",
    ],
    repoLink: "",
    liveLink: "",
    dateStarted: "2023-09",
    dateEnded: null,
    icon: "Terminal",
    seo: {
      title: "Interacter — Lightweight Node.js CLI Input Library",
      description:
        "A zero-dependency Node.js library for handling CLI user input with prompts, confirmations, and validation.",
      keywords: [
        "Node.js CLI",
        "command line input",
        "CLI prompts",
        "npm package",
        "node library",
        "interactive CLI",
        "readline",
      ],
      openGraph: {
        title: "Interacter — Lightweight Node.js CLI Input Library",
        description:
          "Zero-dependency Node.js library for CLI user input handling.",
        type: "website",
      },
    },
  },
  {
    id: "reminder",
    name: "Reminder",
    slug: "reminder-todo-app",
    color: "#c0512f",
    description:
      "A simple, elegant todo web application that keeps you on track with smart reminders and task management.",
    longDescription:
      "Reminder is a clean, productivity-focused todo application built with modern web technologies. It features task categorization, due dates, smart reminders, and a distraction-free interface for staying organized.",
    category: "web",
    status: "active",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    features: [
      "Task categorization",
      "Due date tracking",
      "Smart reminders",
      "Clean interface",
      "Local storage sync",
    ],
    repoLink: "",
    liveLink: "",
    dateStarted: "2024-02",
    dateEnded: null,
    icon: "Clock",
    seo: {
      title: "Reminder — Smart Todo & Task Management App",
      description:
        "A clean todo web application with task categorization, due dates, and smart reminders. Built with React and TypeScript.",
      keywords: [
        "todo app",
        "task management",
        "reminder app",
        "productivity app",
        "React todo",
        "task tracker",
      ],
      openGraph: {
        title: "Reminder — Smart Todo & Task Management App",
        description:
          "Stay organized with smart reminders and a clean task management interface.",
        type: "website",
      },
    },
  },
];

export const projectCategories: Record<
  ProjectCategory,
  { label: string; color: string }
> = {
  mobile: { label: "Mobile", color: "#2f9fd0" },
  web: { label: "Web App", color: "#c9992e" },
  library: { label: "Library", color: "#2f6f9f" },
  cli: { label: "CLI Tool", color: "#2f6b53" },
  fullstack: { label: "Full Stack", color: "#2f6fd0" },
  tool: { label: "Tool", color: "#8a6d2f" },
};
