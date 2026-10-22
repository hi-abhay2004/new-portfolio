import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const accentStyles = [
  {
    bar: "bg-accent group-hover:w-16",
    dot: "bg-accent",
    cta: "hover:bg-accent hover:border-accent hover:text-background",
  },
  {
    bar: "bg-accent-2 group-hover:w-16",
    dot: "bg-accent-2",
    cta: "hover:bg-accent-2 hover:border-accent-2 hover:text-background",
  },
  {
    bar: "bg-accent-3 group-hover:w-16",
    dot: "bg-accent-3",
    cta: "hover:bg-accent-3 hover:border-accent-3 hover:text-background",
  },
  {
    bar: "bg-accent group-hover:w-16",
    dot: "bg-accent",
    cta: "hover:bg-accent hover:border-accent hover:text-background",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-border px-6 py-28 md:px-10">
      <div className="blob blob-b -right-24 top-1/4 h-72 w-72 bg-accent" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">04 &middot; Services</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">What I can build for you</h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {services.map((s, i) => {
            const accent = accentStyles[i % accentStyles.length];
            return (
              <RevealItem
                key={s.title}
                className="group flex flex-col justify-between bg-background p-8 transition-transform duration-300 hover:-translate-y-1 md:p-10"
              >
                <div className={`h-[3px] w-10 transition-all duration-300 ${accent.bar}`} />
                <div className="mt-6 flex-1">
                  <h3 className="font-display text-2xl">{s.title}</h3>
                  <p className="mt-4 text-sm text-foreground/70">{s.description}</p>
                  <ul className="mt-6 space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-foreground/75">
                        <span className={`mt-1 h-1 w-1 flex-shrink-0 rounded-full ${accent.dot}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-fit items-center gap-2 border border-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${accent.cta}`}
                >
                  Request a Quote
                  <ArrowUpRight size={14} />
                </a>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
