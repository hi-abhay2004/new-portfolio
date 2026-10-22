export const profile = {
  name: "Abhay J Sharma",
  initials: "AJS",
  role: "Software Engineer",
  tagline: "PostgreSQL, Python & Data-Driven Backends",
  location: "India (Remote)",
  email: "abhayjsharma440@gmail.com",
  phone: "+91 9538114942",
  linkedin: "https://www.linkedin.com/in/abhay-j-sharma/",
  github: "https://github.com/hi-abhay2004",
  resumeHref: "/resume.pdf",
  summary:
    "Software engineer who migrates messy legacy systems into clean, normalized PostgreSQL backends and ships full-stack products end to end. Comfortable owning a schema redesign, a multi-vendor checkout flow, or an LLM-powered support bot in the same sprint.",
  metaDescription:
    "Freelance software engineer specializing in PostgreSQL backend architecture, Next.js/NestJS full-stack apps, and LLM/RAG automation. Available for hire.",
};

export const stats = [
  { value: "500+", label: "Products synced, legacy Shopify → PostgreSQL" },
  { value: "40%", label: "Manual support volume cut via AI chat" },
  { value: "50%", label: "Faster invoicing, offline-first billing app" },
  { value: "2+", label: "Years shipping production backends" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "VCNITI Technologies",
    role: "Full Stack SDE I",
    period: "May 2026 – September 2026",
    points: [
      "Migrated legacy Shopify workflows into a normalized PostgreSQL/NestJS backend; synchronized 500+ live products and associated state models.",
      "Built customer, supplier, and admin dashboards and multi-vendor workflows using Next.js, NestJS, and PostgreSQL.",
      "Deployed backend services on AWS Lightsail with Neon serverless PostgreSQL and Upstash Redis caching.",
      "Implemented technical SEO updates, structured data, and sitemaps; monitored indexing health using Google Search Console.",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Full Stack Developer",
    period: "2025 – Present",
    points: [
      "Built ERP/HMS solutions and business analytics dashboards; developing a mobile-first operations management system for project tracking, measurements, labour coordination, and quotations.",
      "Built LLM-based RAG solutions, n8n workflows, and WhatsApp communication automation, with full-stack applications, cloud storage, and deployment.",
    ],
  },
  {
    company: "Skylights Energy",
    role: "Frontend Developer",
    period: "March 2024 – June 2024",
    location: "Bengaluru",
    points: [
      "Built responsive internal business components using React.js and Tailwind CSS within Agile sprints.",
      "Integrated front-end modules with Firebase and backend REST APIs; resolved client-rendering issues.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
  outcome: string;
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "vcniti-procurement",
    title: "VCNITI Procurement Platform",
    year: "2026",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Razorpay"],
    description:
      "Multi-vendor logistics platform: supplier tracking boards, automated split settlements, and a normalized procurement schema replacing a legacy Shopify setup.",
    outcome: "500+ live products synced across vendor and admin dashboards.",
    href: "https://vcniti.com",
    linkLabel: "vcniti.com",
  },
  {
    slug: "ai-support",
    title: "AI Automated Customer Support",
    year: "2025",
    tags: ["LLM", "RAG", "SSE", "Node.js"],
    description:
      "Conversational support portal with streaming (SSE) responses, built on a RAG pipeline grounded in product documentation.",
    outcome: "Cut standard manual support requests by 40%.",
    href: "https://github.com/hi-abhay2004/Ai-customer-support",
    linkLabel: "View on GitHub",
  },
  {
    slug: "moodshift-ai",
    title: "MoodShift AI — Emotion-Aware Music Recommendation",
    year: "2025",
    tags: ["Next.js", "Flask", "MediaPipe", "ChromaDB"],
    description:
      "AI app that detects facial emotion in real time and recommends music to match or gradually improve mood, building personalized mood-transition playlists with local, privacy-focused audio analysis.",
    outcome: "Facial emotion recognition driving mood-transition playlists.",
    href: "https://github.com/hi-abhay2004/moodshift-ai",
    linkLabel: "View on GitHub",
  },
  {
    slug: "ai-medical-chatbot",
    title: "AI Medical Chatbot — Symptom Analysis Assistant",
    year: "2025",
    tags: ["React.js", "FastAPI", "PostgreSQL", "LLM"],
    description:
      "Conversational healthcare assistant that takes natural-language symptom descriptions and returns preliminary, context-aware health information alongside secure authentication and conversation history.",
    outcome: "Bronze Award — FLIPR Labs AI National Hackathon (Chat Support).",
    href: "https://github.com/hi-abhay2004/ai-medical-chatbot",
    linkLabel: "View on GitHub",
  },
  {
    slug: "air-quality-dashboard",
    title: "Global Real-Time Air Quality Dashboard",
    year: "2024",
    tags: ["React", "Leaflet", "REST APIs"],
    description:
      "Map-based dashboard rendering live global air-quality readings via Leaflet, with per-station drill-down.",
    outcome: "Live, map-first view of global AQI data.",
    href: "https://github.com/hi-abhay2004/nasa_earth_challenge",
    linkLabel: "View on GitHub",
  },
  {
    slug: "hisab-billing",
    title: "Hisab — Carpenter Billing App",
    year: "2024",
    tags: ["React Native", "Offline-first"],
    description:
      "Offline-first mobile billing app built for non-technical carpenters to generate invoices on-site without signal.",
    outcome: "Reduced invoice generation time by 50%.",
    href: "https://github.com/hi-abhay2004/hisab",
    linkLabel: "View on GitHub",
  },
];

export type ServiceOffer = {
  title: string;
  description: string;
  deliverables: string[];
};

export const services: ServiceOffer[] = [
  {
    title: "Backend & Database Architecture",
    description:
      "Hire a freelance backend developer for PostgreSQL schema design, legacy-system migration, and REST API builds on Node.js/NestJS.",
    deliverables: ["Schema design & migrations", "Data sync & integrity", "REST API integration"],
  },
  {
    title: "In-House Software & Full-Stack Web Apps",
    description:
      "Build in-house software instead of stitching together third-party tools — end-to-end products on Next.js, NestJS, and PostgreSQL: dashboards, ERPs, multi-vendor platforms.",
    deliverables: ["Customer/admin dashboards", "Auth & role-based access", "Cloud deployment"],
  },
  {
    title: "AI Developer for Hire — LLM & Automation",
    description:
      "Hire an AI developer for LLM-based RAG applications, n8n workflow automation, and WhatsApp communication bots.",
    deliverables: ["RAG support bots", "n8n automations", "WhatsApp integrations"],
  },
  {
    title: "Technical SEO & Performance",
    description:
      "Structured data, sitemaps, and indexing health for product-driven sites.",
    deliverables: ["Schema markup", "Search Console monitoring", "Performance audits"],
  },
];

export const workedWith = ["VCNITI Technologies", "Skylights Energy", "Freelance Clients"];

export const skillGroups = [
  { label: "Languages", items: ["Python", "SQL", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  {
    label: "Databases & Data",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "TypeORM", "Neon", "Upstash Redis", "Schema Design", "Migrations"],
  },
  { label: "Backend & APIs", items: ["Node.js", "NestJS", "Express.js", "REST APIs", "SSE"] },
  { label: "Automation & AI", items: ["n8n", "LLM Apps", "RAG", "WhatsApp Automation"] },
  { label: "Cloud & Deployment", items: ["AWS Lightsail", "Firebase", "Cloudflare R2", "Vercel", "Netlify"] },
  { label: "Frontend", items: ["React.js", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"] },
];

export const certifications = [
  "Bronze Award — FLIPR Labs AI National Hackathon (Chat Support)",
  "Cisco CCST: Networking & System Troubleshooting",
  "SQL Server Specialist — Infosys Springboard",
  "Python Programmer — Infosys Springboard",
];

export const education = [
  { school: "Dayananda Sagar University", degree: "MCA", period: "Completed, 2026" },
  { school: "RJS FG College", degree: "BCA", period: "July 2024" },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
