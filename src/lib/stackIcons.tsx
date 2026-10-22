import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTypeorm,
  SiRedis,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiN8N,
  SiWhatsapp,
  SiFirebase,
  SiCloudflare,
  SiVercel,
  SiNetlify,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { Database, Network, Radio, Sparkles, Cloud } from "lucide-react";

export type StackIcon = { Icon: IconType; color: string };

export const stackIcons: Record<string, StackIcon> = {
  Python: { Icon: SiPython, color: "#3776AB" },
  SQL: { Icon: Database, color: "#4479A1" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },

  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "Prisma ORM": { Icon: SiPrisma, color: "#2D3748" },
  TypeORM: { Icon: SiTypeorm, color: "#E83524" },
  Neon: { Icon: Database, color: "#00E599" },
  "Upstash Redis": { Icon: SiRedis, color: "#DC382D" },
  "Schema Design": { Icon: Database, color: "#d44a1f" },
  Migrations: { Icon: Database, color: "#1f6f5c" },

  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "Express.js": { Icon: SiExpress, color: "#000000" },
  "REST APIs": { Icon: Network, color: "#d44a1f" },
  SSE: { Icon: Radio, color: "#1f6f5c" },

  n8n: { Icon: SiN8N, color: "#EA4B71" },
  "LLM Apps": { Icon: Sparkles, color: "#e0a526" },
  RAG: { Icon: Sparkles, color: "#d44a1f" },
  "WhatsApp Automation": { Icon: SiWhatsapp, color: "#25D366" },

  "AWS Lightsail": { Icon: Cloud, color: "#FF9900" },
  Firebase: { Icon: SiFirebase, color: "#FFCA28" },
  "Cloudflare R2": { Icon: SiCloudflare, color: "#F38020" },
  Vercel: { Icon: SiVercel, color: "#000000" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },

  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { Icon: SiFramer, color: "#0055FF" },
};
