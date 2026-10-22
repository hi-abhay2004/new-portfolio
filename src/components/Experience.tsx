import { experience, education } from "@/lib/data";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-border px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">02 &middot; Experience</span>
        </Reveal>

        <RevealGroup className="mt-10 divide-y divide-border border-y border-border">
          {experience.map((job) => (
            <RevealItem key={job.company} className="group grid gap-4 py-10 md:grid-cols-[1fr_1fr_2fr]">
              <div>
                <h3 className="font-display text-2xl">{job.company}</h3>
                <p className="mt-1 text-sm text-foreground/60">{job.role}</p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {job.period}
                {job.location ? <span className="block text-foreground/40">{job.location}</span> : null}
              </p>
              <ul className="space-y-2 text-sm text-foreground/75">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-20 max-w-xl">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Education</h3>
            <ul className="mt-5 space-y-4">
              {education.map((e) => (
                <li key={e.school} className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <div>
                    <p className="font-display text-lg">{e.degree}</p>
                    <p className="text-sm text-foreground/60">{e.school}</p>
                  </div>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">{e.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
