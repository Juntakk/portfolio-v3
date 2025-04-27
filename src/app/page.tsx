"use client";

import AboutMe from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Header from "@/components/shared/Header";
import Projects from "@/components/shared/Projects";
import Services from "@/components/shared/Services";
import Footer from "@/components/shared/Footer";
import UI from "@/components/shared/UI";
import Certificates from "@/components/shared/Certificates";

export default function Home() {
  return (
    <main className="z-2">
      <UI />
      <Header />
      <Services />
      <Projects />
      <Certificates />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
