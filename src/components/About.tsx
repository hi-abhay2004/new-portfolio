import { stats, skillGroups, profile } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { StackTile } from "@/components/StackTile";

const statColors = ["text-accent", "text-accent-2", "text-accent-3", "text-accent"];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-border px-6 py-28 md:px-10">
      <div className="blob blob-a -left-24 top-10 h-72 w-72 bg-accent-2" />
      <div className="blob blob-b right-0 bottom-0 h-80 w-80 bg-accent-3" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">01 &middot; About</span>
        </Reveal>

        <div className="mt-8 grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="font-display text-3xl leading-tight md:text-4xl">
              I turn tangled legacy systems into backends that hold up under real
              traffic &mdash; and I ship the product around them, not just the API.
            </p>
            <p className="mt-6 max-w-xl text-foreground/80">
              Based in {profile.location.replace(" (Remote)", "")}, working remote with
              teams and clients globally. My core strength is PostgreSQL schema design
              and data migration, paired with practical full-stack delivery: Next.js
              and NestJS on top, n8n and LLM/RAG automations where they genuinely save
              time.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <RevealItem key={s.label}>
                <p className={`font-display text-4xl font-bold md:text-5xl ${statColors[i % statColors.length]}`}>
                  <Counter value={s.value} />
                </p>
                <p className="mt-2 text-sm text-foreground/70">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Stack</h3>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <RevealItem key={group.label}>
                <h4 className="font-display text-lg italic">{group.label}</h4>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {group.items.map((item) => (
                    <StackTile key={item} name={item} />
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
