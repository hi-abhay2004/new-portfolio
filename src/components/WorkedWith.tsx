import { workedWith } from "@/lib/data";

export function WorkedWith() {
  return (
    <section className="border-t border-border px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Worked with</span>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {workedWith.map((name) => (
            <li key={name} className="font-display text-xl italic text-foreground/60">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
