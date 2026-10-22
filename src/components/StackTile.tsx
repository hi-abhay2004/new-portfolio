"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { stackIcons } from "@/lib/stackIcons";

export function StackTile({ name }: { name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const icon = stackIcons[name];
  const Icon = icon?.Icon;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 250, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 250, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(py * -18);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  if (!icon || !Icon) return null;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 500 }}
      className="group relative flex flex-col items-center gap-2 border border-border bg-surface px-3 py-5 text-center transition-colors hover:border-foreground/30"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
        style={{ background: icon.color }}
      />
      <Icon
        size={30}
        style={{ color: icon.color, transform: "translateZ(20px)" }}
        className="drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)]"
        aria-hidden="true"
      />
      <span className="font-mono text-[10px] leading-tight text-foreground/70">{name}</span>
    </motion.div>
  );
}
