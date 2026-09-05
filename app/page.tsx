import AmbientBackdrop from "@/components/AmbientBackdrop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import UpworkCTA from "@/components/UpworkCTA";

export default function HomePage() {
  return (
    <>
      <AmbientBackdrop />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <CaseStudies />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <UpworkCTA />
      <Footer />
    </>
  );
}
