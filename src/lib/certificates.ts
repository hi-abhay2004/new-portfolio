export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  date?: string;
  file: string;
  type: "image" | "pdf";
};

export const certificates: Certificate[] = [
  {
    slug: "data-analytics",
    title: "IT Specialist — Data Analytics",
    issuer: "Certiport / Pearson VUE",
    date: "Jan 2026",
    file: "/certificates/data-anlaystics.jfif",
    type: "image",
  },
  {
    slug: "cisco-ccst",
    title: "Cisco Certified Support Technician (CCST) — Networking",
    issuer: "Cisco",
    date: "Apr 2025",
    file: "/certificates/cisco.jpg",
    type: "image",
  },
  {
    slug: "java-springboot-adv",
    title: "Java Spring Boot — Advanced",
    issuer: "Infosys Springboard",
    file: "/certificates/java-springboot-adv.jpg",
    type: "image",
  },
  {
    slug: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    date: "Dec 2025",
    file: "/certificates/aws-cloud.png",
    type: "image",
  },
  {
    slug: "microsoft-sql-server",
    title: "Certified Microsoft SQL Server Training",
    issuer: "Infosys Springboard",
    date: "Mar 2025",
    file: "/certificates/microsoft-sql-server-training.png",
    type: "image",
  },
  {
    slug: "flipr-hackathon",
    title: "AI National Hackathon — Bronze Rank",
    issuer: "FLIPR Labs",
    date: "May 2025",
    file: "/certificates/flipr-hackathon.png",
    type: "image",
  },
  {
    slug: "google-agentic-ai-day",
    title: "Agentic AI Day — Certificate of Participation",
    issuer: "Google Cloud × Hack2Skill",
    date: "2025",
    file: "/certificates/google-ai-agentic-day.pdf",
    type: "pdf",
  },
  {
    slug: "isro-hackathon",
    title: "Bharatiya Antariksh Hackathon",
    issuer: "ISRO × Hack2Skill",
    date: "2025",
    file: "/certificates/isro-hackathon.pdf",
    type: "pdf",
  },
  {
    slug: "nasa-space-apps",
    title: "Space Apps Challenge — Galactic Problem Solver",
    issuer: "NASA",
    date: "Oct 2025",
    file: "/certificates/nasa-hackathon.jpg",
    type: "image",
  },
];
