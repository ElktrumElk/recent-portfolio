type IconProps = { size?: number; color?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: "1.6",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export const ReactIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth={base.strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="2.1" fill={color} stroke="none" />
    <ellipse cx="12" cy="12" rx="10.2" ry="3.9" />
    <ellipse cx="12" cy="12" rx="10.2" ry="3.9" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10.2" ry="3.9" transform="rotate(120 12 12)" />
  </svg>
);

export const NextJSIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 8v8" />
    <path d="M15.5 8v8" />
    <path d="M8.3 8.1 15.6 15.7" />
    <circle cx="16.6" cy="8.6" r="1" fill={color} stroke="none" />
  </svg>
);

export const TypeScriptIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3.2" />
    <text
      x="12"
      y="12.5"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="var(--font-space-grotesk), sans-serif"
      fontSize="8.6"
      fontWeight="700"
      fill={color}
      stroke="none"
    >
      TS
    </text>
  </svg>
);

export const JavaScriptIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <text
      x="12"
      y="12.5"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="var(--font-space-grotesk), sans-serif"
      fontSize="8.6"
      fontWeight="700"
      fill={color}
      stroke="none"
    >
      JS
    </text>
  </svg>
);

export const NodeJSIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12,2.8 19.6,7.4 19.6,16.6 12,21.2 4.4,16.6 4.4,7.4" />
    <text
      x="12"
      y="12.7"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="var(--font-space-grotesk), sans-serif"
      fontSize="7.4"
      fontWeight="700"
      fill={color}
      stroke="none"
    >
      JS
    </text>
  </svg>
);

export const FlutterIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 3h7.2l7.3 7.3" />
    <path d="M5 9h4.4l6.6 6.6" />
    <path d="M5 15h2.2l3.4 3.4" />
    <path d="M5 3v18" />
  </svg>
);

export const TailwindIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill={color}
    aria-hidden="true"
  >
    <path d="M12 4.5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.23 1.57.89 2.29 1.62 1.17 1.19 2.53 2.58 5.51 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.23-1.57-.89-2.29-1.62C16.33 6.18 14.97 4.5 12 4.5zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.23 1.57.89 2.29 1.62 1.17 1.19 2.53 2.58 5.51 2.58 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.23-1.57-.89-2.29-1.62C16.33 13.68 14.97 12 6 12z" />
  </svg>
);

export const MySQLIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <ellipse cx="12" cy="5" rx="8.5" ry="3" />
    <path d="M3.5 5v14c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3V5" />
    <path d="M3.5 12c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3" />
  </svg>
);

export const GitIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="6" cy="5" r="2.3" />
    <circle cx="6" cy="19" r="2.3" />
    <circle cx="18" cy="9" r="2.3" />
    <path d="M6 7.3v9.4" />
    <path d="M18 11.3c0 3.8-6 3-6 7.7" />
  </svg>
);

export const GitHubIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill={color}
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.2 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

export const VSCodeIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 4.5 4 9v6l5 4.5" />
    <path d="M15 4.5 20 9v6l-5 4.5" />
  </svg>
);

export const DribbbleIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.3" />
    <path d="M5.5 6.3c3.6 2.6 7.2 6.6 9.3 12.4" />
    <path d="M19.8 8.2c-5.6 1-10.6.5-14.3-2.5" />
    <path d="M4.5 16.6c3.3-5.2 8.2-8.3 14.6-7.7" />
  </svg>
);

export const UIUXIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 20c4-4 7-6.5 11-8.5" />
    <path d="M15 11.5 19.5 7" />
    <path d="M4 20l2.5-.7" />
    <circle cx="15" cy="11.5" r="1.6" />
  </svg>
);

export const CreditCardIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

export const LayersIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="12,2 2,7 12,12 22,7" />
    <polyline points="2,12 12,17 22,12" />
    <polyline points="2,17 12,22 22,17" />
  </svg>
);

export const ShareIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export const CloudIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

export const TerminalIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export const ClockIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const DownloadIcon = ({ size = 24, color = "currentColor" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox={base.viewBox}
    fill="none"
    stroke={color}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const brandIcons = {
  react: ReactIcon,
  nextjs: NextJSIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  nodejs: NodeJSIcon,
  flutter: FlutterIcon,
  tailwind: TailwindIcon,
  mysql: MySQLIcon,
  git: GitIcon,
  github: GitHubIcon,
  vscode: VSCodeIcon,
  dribbble: DribbbleIcon,
  uiux: UIUXIcon,
  creditcard: CreditCardIcon,
  layers: LayersIcon,
  share: ShareIcon,
  cloud: CloudIcon,
  download: DownloadIcon,
} as const;

export type BrandIconName = keyof typeof brandIcons;
