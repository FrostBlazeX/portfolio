import type { ComponentType, SVGProps } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { Accessibility, Blocks, Gauge, Smartphone } from "lucide-react";

type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface Skill {
  name: string;
  icon: SkillIcon;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    category: "Styling",
    items: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SCSS", icon: SiSass },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
      { name: "Responsive Design", icon: Smartphone },
      { name: "Accessibility", icon: Accessibility },
      { name: "Component Architecture", icon: Blocks },
      { name: "Performance Optimization", icon: Gauge },
    ],
  },
];

export const flatSkills: Skill[] = skills.flatMap((group) => group.items);
