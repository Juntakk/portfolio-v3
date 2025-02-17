"use client";
import AboutMe from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <Projects />
      <AboutMe />
      <Contact />
    </main>
  );
}
