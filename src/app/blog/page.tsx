import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on PostgreSQL, backend architecture, and shipping full-stack products.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 flex min-h-screen flex-col justify-center px-6 pt-28 md:px-10">
        <div className="mx-auto max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Blog</span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">Writing, soon.</h1>
          <p className="mt-6 max-w-xl text-foreground/70">
            Long-form notes on PostgreSQL schema design, migrations, and backend
            architecture are in progress. Check back shortly, or{" "}
            <a href="/#contact" className="underline underline-offset-4 hover:text-accent">
              get in touch
            </a>{" "}
            in the meantime.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
