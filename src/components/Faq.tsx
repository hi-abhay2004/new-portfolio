"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const faqs = [
  {
    q: "Are you available to hire as a freelance developer?",
    a: "Yes. I'm a freelance software engineer based in India working remote with clients and teams worldwide, available for project-based work and full-time roles.",
  },
  {
    q: "Can you build in-house software for my business?",
    a: "Yes. I build custom in-house software on Next.js, NestJS, and PostgreSQL — internal dashboards, ERPs, multi-vendor platforms, and admin tools tailored to how your team actually works.",
  },
  {
    q: "What kind of developer are you — backend, full-stack, or AI?",
    a: "All three. My core strength is backend and PostgreSQL database architecture, I ship full-stack products end to end on Next.js/NestJS, and I build LLM/RAG and automation features when a project calls for AI.",
  },
  {
    q: "Do you work with startups and small businesses, not just agencies?",
    a: "Yes. I've worked directly with startups, individual business owners, and agencies — from freelance clients to a full-time engineering role migrating a production Shopify platform to PostgreSQL.",
  },
];

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border py-6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg md:text-xl">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Plus size={20} className="text-accent" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="mt-4 max-w-2xl text-sm text-foreground/70">{a}</p>
      </motion.div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative border-t border-border px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">05 &middot; FAQ</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Common questions</h2>
        </Reveal>

        <RevealGroup className="mt-10 max-w-3xl">
          {faqs.map((f) => (
            <RevealItem key={f.q}>
              <FaqRow q={f.q} a={f.a} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
