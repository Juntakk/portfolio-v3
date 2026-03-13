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
    const hasSentAnalytics = sessionStorage.getItem("analytics_sent");
    if (!hasSentAnalytics) {
      sessionStorage.setItem("analytics_sent", "true");

      const userAgent = navigator.userAgent.toLowerCase();

      // Common ATS/bot user agent patterns
      const botPatterns = [
        "bot",
        "crawler",
        "spider",
        "headless",
        "phantom",
        "selenium",
        "puppeteer",
        "playwright",
        "wget",
        "curl",
        "python-requests",
        "java/",
        "apache-httpclient",
      ];

      const isBot = botPatterns.some((pattern) => userAgent.includes(pattern));
      const isSuspicious = window.screen.width === 0 || window.innerWidth === 0;

      const timestamp = new Date().toLocaleString();
      const referrer = document.referrer || "Direct visit";
      const screenResolution = `${window.screen.width}x${window.screen.height}`;
      const viewportSize = `${window.innerWidth}x${window.innerHeight}`;
      const language = navigator.language;

      // Still send the email, but flag it clearly
      emailjs.send(
        "service_1ke57ce",
        "template_zrerjkw",
        {
          to_name: "Nick",
          name: isBot || isSuspicious ? "🤖 BOT VISIT" : "👤 Human Visitor",
          email: "noreply@portfolio",
          message: `${isBot || isSuspicious ? "[LIKELY ATS BOT]" : "[LIKELY HUMAN]"} 
        
Timestamp: ${timestamp}
User Agent: ${navigator.userAgent}
Referrer: ${referrer}
Screen Resolution: ${screenResolution}
Viewport Size: ${viewportSize}
Language: ${language}`,
        },
        "78CM3jHVxqrSQ8s3i",
      );
    }
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
