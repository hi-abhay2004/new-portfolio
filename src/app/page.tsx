import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Certificates } from "@/components/Certificates";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { WorkedWith } from "@/components/WorkedWith";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Certificates />
        <Services />
        <WorkedWith />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
