import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted md:flex-row">
        <p>
          &copy; {2026} {profile.name}
        </p>
        <a href="#top" className="hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
