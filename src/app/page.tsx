"use client";

import { useEffect } from "react";
import AboutMe from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Header from "@/components/shared/Header";
import Projects from "@/components/shared/Projects";
import Services from "@/components/shared/Services";
import Footer from "@/components/shared/Footer";
import UI from "@/components/shared/UI";
import Certificates from "@/components/shared/Certificates";
import emailjs from "emailjs-com";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const hasSentAnalytics = sessionStorage.getItem("analytics_sent");

      if (!hasSentAnalytics) {
        sessionStorage.setItem("analytics_sent", "true");

        const timestamp = new Date().toLocaleString();
        const userAgent = navigator.userAgent;
        const referrer = document.referrer || "Direct visit";
        const screenResolution = `${window.screen.width}x${window.screen.height}`;
        const viewportSize = `${window.innerWidth}x${window.innerHeight}`;
        const language = navigator.language;

        emailjs.send(
          "service_1ke57ce",
          "template_zrerjkw",
          {
            to_name: "Nick",
            name: "Portfolio Visitor",
            email: "noreply@portfolio",
            message: `New visitor on your portfolio!\n\nTimestamp: ${timestamp}\nUser Agent: ${userAgent}\nReferrer: ${referrer}\nScreen Resolution: ${screenResolution}\nViewport Size: ${viewportSize}\nLanguage: ${language}`,
          },
          "78CM3jHVxqrSQ8s3i",
        );

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
