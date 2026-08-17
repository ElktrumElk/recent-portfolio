export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "freelance-dev",
    role: "Freelance Software Developer",
    company: "Self-Employed",
    companyUrl: "",
    location: "Remote",
    startDate: "2022-01",
    endDate: null,
    description:
      "Building web and mobile applications for clients across various industries, specializing in React, Next.js, and Flutter development.",
    highlights: [
      "Delivered 50+ projects for clients worldwide",
      "Built reusable component library used across multiple projects",
      "Specialized in accessible, performant user interfaces",
      "Full-stack development from concept to deployment",
    ],
    techStack: ["React", "Next.js", "Flutter", "TypeScript", "Node.js"],
  },
];

export const education = [
  {
    id: "self-taught",
    institution: "Self-Directed Learning",
    degree: "Software Engineering",
    field: "Computer Science & Web Development",
    startDate: "2021",
    endDate: "Present",
    description:
      "Continuous learning through online courses, documentation, open-source contributions, and hands-on project building.",
  },
];
