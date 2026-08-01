"use client";
import "./Marquee.css";
import {
  DribbbleIcon,
  GitHubIcon,
  NextJSIcon,
  ReactIcon,
  VSCodeIcon,
} from "../../lib/BrandIcons";

const platforms = [
  { name: "Next.js", icon: NextJSIcon },
  { name: "VS Code", icon: VSCodeIcon },
  { name: "GitHub", icon: GitHubIcon },
  { name: "Dribbble", icon: DribbbleIcon },
  { name: "React", icon: ReactIcon },
];

const Item = ({
  name,
  icon: Icon,
  ariaHidden,
}: {
  name: string;
  icon: typeof NextJSIcon;
  ariaHidden?: boolean;
}) => (
  <li className="platform-marquee__item" aria-hidden={ariaHidden || undefined}>
    <Icon size={22} color="var(--muted)" />
    <span>{name}</span>
  </li>
);

const Marquee = () => {
  return (
    <section
      className="platform-marquee"
      aria-label="Platforms and technologies I build with"
    >
      <div className="platform-marquee__viewport">
        <ul className="platform-marquee__track">
          {platforms.map((platform) => (
            <Item key={platform.name} {...platform} />
          ))}
          {platforms.map((platform) => (
            <Item key={`dup-${platform.name}`} {...platform} ariaHidden />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Marquee;
