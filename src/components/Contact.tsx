import { Mail, Phone, ExternalLink, FileDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { profile } from "@/lib/data";

const waDigits = profile.phone.replace(/\D/g, "");
const waMessage = encodeURIComponent(`Hi ${profile.name.split(" ")[0]}, I found your portfolio and I'd like to talk.`);
const waHref = `https://wa.me/${waDigits}?text=${waMessage}`;
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border px-6 py-28 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">06 &middot; Contact</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Let&apos;s build something that <span className="italic text-accent">holds up.</span>
          </h2>
          <p className="mt-6 max-w-md text-foreground/70">
            Open to freelance projects and full-time roles. Tell me what you&apos;re
            building and I&apos;ll get back within a day.
          </p>

          <ul className="mt-10 space-y-4 font-mono text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 hover:text-accent">
                <Mail size={16} /> {profile.email}
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 hover:text-accent">
                <Phone size={16} /> {profile.phone}
              </a>
            </li>
            <li>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-accent">
                <SiWhatsapp size={16} aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-accent">
                <ExternalLink size={16} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-accent">
                <ExternalLink size={16} /> GitHub
              </a>
            </li>
          </ul>

          <a
            href={profile.resumeHref}
            download
            className="mt-10 inline-flex items-center gap-2 border border-foreground px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
          >
            Download Resume <FileDown size={14} />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
