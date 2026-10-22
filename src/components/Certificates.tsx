"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Expand, FileText } from "lucide-react";
import { certificates, type Certificate } from "@/lib/certificates";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CertificateModal } from "@/components/CertificateModal";

const bounce = { type: "spring" as const, stiffness: 260, damping: 20, mass: 0.6 };

function Thumb({ cert }: { cert: Certificate }) {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: -3, scale: 1.08 }}
      transition={bounce}
      className="relative h-16 w-16 flex-shrink-0 overflow-hidden border border-border bg-surface p-1 md:h-20 md:w-20"
    >
      {cert.type === "pdf" ? (
        <div className="flex h-full w-full items-center justify-center text-foreground/40">
          <FileText size={28} />
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cert.file} alt="" aria-hidden="true" className="h-full w-full object-contain" />
      )}
    </motion.div>
  );
}

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="relative border-t border-border px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            03 &middot; Certifications
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Verified credentials</h2>
        </Reveal>

        <RevealGroup className="mt-14 divide-y divide-border border-y border-border">
          {certificates.map((cert, i) => (
            <RevealItem key={cert.slug}>
              <motion.button
                type="button"
                onClick={() => setActive(cert)}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.985 }}
                transition={bounce}
                className="group flex w-full items-center gap-5 py-5 text-left transition-colors hover:bg-foreground hover:text-background md:gap-8 md:py-6"
              >
                <span className="font-mono text-xs text-muted group-hover:text-background/50">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Thumb cert={cert} />

                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg leading-snug md:text-xl">
                    {cert.title}
                  </span>
                  <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-muted group-hover:text-background/60">
                    {cert.issuer}
                    {cert.date ? ` · ${cert.date}` : ""}
                  </span>
                </span>

                <motion.span
                  whileHover={{ scale: 1.15 }}
                  transition={bounce}
                  className="hidden flex-shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-wider sm:inline-flex"
                >
                  View
                  <Expand size={14} />
                </motion.span>
              </motion.button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <CertificateModal certificate={active} onClose={() => setActive(null)} />
    </section>
  );
}
