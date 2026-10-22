"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const accents = ["var(--color-accent)", "var(--color-accent-2)", "var(--color-accent-3)", "var(--color-accent)"];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const accentColor = accents[index % accents.length];

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 260, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 260, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(py * -8);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800, borderTop: `3px solid ${accentColor}` }}
      className="group relative flex h-full flex-col bg-background transition-colors hover:bg-foreground hover:text-background"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.6 }}
        className="flex h-full flex-col p-8 md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-muted group-hover:text-background/60">{project.year}</span>
          {project.href && (
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider"
              aria-label={`Open ${project.title}`}
            >
              {project.linkLabel}
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        <h3 className="mt-6 font-display text-2xl leading-tight md:text-3xl">{project.title}</h3>
        <p className="mt-4 text-sm text-foreground/70 group-hover:text-background/80">{project.description}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider" style={{ color: accentColor }}>
          {project.outcome}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border px-2.5 py-1 font-mono text-[11px] text-foreground/70 group-hover:border-background/30 group-hover:text-background/70"
            >
              {tag}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
