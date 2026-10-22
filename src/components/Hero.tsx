"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const roles = ["Backend Systems", "PostgreSQL Architecture", "LLM / RAG Pipelines", "Full-Stack Products"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:px-10"
    >
      <div className="blob blob-a -top-20 -right-20 h-56 w-56 bg-accent md:h-96 md:w-96" />
      <div className="blob blob-b bottom-10 -left-16 hidden h-80 w-80 bg-accent-2 md:block" />
      <div
        className="blob blob-a top-1/3 left-1/2 hidden h-64 w-64 bg-accent-3 lg:block"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="relative lg:min-h-[560px]">
        <div className="relative z-10">
          <motion.p
            suppressHydrationWarning
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            {profile.location} &middot; Available for freelance &amp; full-time
          </motion.p>

          <motion.h1
            suppressHydrationWarning
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-full font-display text-[13vw] leading-[0.95] font-black tracking-tight break-words md:text-[7.5rem]"
          >
            Abhay J
            <br />
            <span className="italic text-accent">Sharma</span>
            <span className="sr-only"> — {profile.role}, freelance PostgreSQL &amp; full-stack developer</span>
          </motion.h1>

          <div className="mt-10 max-w-2xl lg:max-w-[42%] xl:max-w-[38%]">
            <motion.p
              suppressHydrationWarning
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg text-foreground/80 md:text-xl"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              suppressHydrationWarning
              initial={{ opacity: 0, y: reduce ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-80"
              >
                Hire Me
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
              >
                View Work
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-0 mt-8 aspect-square w-full overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:flex lg:aspect-auto lg:w-[52%] lg:items-center lg:justify-end lg:overflow-visible xl:w-[80%]"
        >
          <img
            src="/abhay-portfolio-portrait.svg"
            alt={`${profile.name} — illustrated portrait`}
            width={1650}
            height={900}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-right lg:h-auto lg:max-h-[82vh] lg:w-full lg:object-contain"
          />
        </motion.div>
        </div>

        <div className="relative z-10 mt-16 overflow-hidden border-y border-border py-4">
          <div className="flex animate-[marquee_16s_linear_infinite] gap-6 whitespace-nowrap motion-reduce:animate-none md:gap-10">
            {[...roles, ...roles].map((r, i) => (
              <span key={i} className="font-mono text-sm uppercase tracking-wider text-muted">
                {r} <span className="text-accent">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted md:flex"
      >
        Scroll
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
