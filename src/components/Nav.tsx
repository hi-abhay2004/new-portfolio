"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight"
          aria-label={`${profile.name} — home`}
        >
          {profile.initials}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1 border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-4 font-mono text-sm uppercase tracking-wider">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3"
                >
                  <span className="text-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
