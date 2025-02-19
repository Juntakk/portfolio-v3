"use client"; // Required for client-side interactivity in Next.js

import { useState, useEffect } from "react"; // Add useState and useEffect
import { motion } from "framer-motion"; // Import Framer Motion
import {
  IoFolderOpen,
  IoPerson,
  IoHome,
  IoSettingsSharp,
  IoMail,
} from "react-icons/io5";
import NavLink from "../ui/navlink";
import { useTranslation } from "@/hooks/useTranslation";

export default function VerticalNavbar() {
  const translations = useTranslation();
  const [activeSection, setActiveSection] = useState("header"); // State to track active section

  // Function to handle intersection changes
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Get all sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-2/3 transform -translate-y-2/3 text-accent p-1 sm:p-3 bg-transparent backdrop-blur-sm rounded-lg shadow-sm border border-white/10">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, // Staggered delay for each link
            },
          },
        }}
        className="space-y-8"
      >
        {/* Home Link */}
        <NavLink
          icon={<IoHome />}
          content={translations.home}
          destination="header"
          isActive={activeSection === "header"} // Pass active state
        />

        {/* Services Link */}
        <NavLink
          icon={<IoSettingsSharp />}
          content="Services"
          destination="services"
          isActive={activeSection === "services"} // Pass active state
        />

        {/* Projects Link */}
        <NavLink
          icon={<IoFolderOpen />}
          content={translations.projects}
          destination="projects"
          isActive={activeSection === "projects"} // Pass active state
        />

        {/* About Link */}
        <NavLink
          icon={<IoPerson />}
          content={translations.about}
          destination="about"
          isActive={activeSection === "about"} // Pass active state
        />

        {/* Contact Link */}
        <NavLink
          icon={<IoMail />}
          content="Contact"
          destination="contact"
          isActive={activeSection === "contact"} // Pass active state
        />
      </motion.ul>
    </nav>
  );
}
