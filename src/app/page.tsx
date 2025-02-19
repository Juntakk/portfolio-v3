"use client";

import AboutMe from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Header from "@/components/shared/Header";
import Projects from "@/components/shared/Projects";
import Services from "@/components/shared/Services";
import Footer from "@/components/shared/Footer";
import VerticalNavbar from "@/components/shared/VerticalNavbar";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function Home() {
  return (
    <main className="z-2">
      <VerticalNavbar />
      <ThemeToggle />
      <Header />
      <Services />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  );
}
