import { projects } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section id="work" className="relative border-t border-border px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">00 &middot; Selected Work</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Case studies</h2>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {projects.map((p, i) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-6 text-xs text-foreground/60">
          Live links and full write-ups being added per project — placeholders marked for now.
        </p>
      </div>
    </section>
  );
}
