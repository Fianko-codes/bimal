import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { StatusStrip } from "@/components/StatusStrip";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Honors } from "@/components/Honors";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <StatusStrip />
        <Experience />
        <Skills />
        <Honors />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
