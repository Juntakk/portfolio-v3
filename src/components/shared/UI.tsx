import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/theme/LanguageProvider";
import { useThemeStore } from "@/theme/theme";
import {
  IoSunny,
  IoMoon,
  IoHome,
  IoSettingsSharp,
  IoFolderOpen,
  IoPerson,
  IoMail,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import CV from "../../../public/assets/NicolasGauthier_DEV.pdf";
import CV_fr from "../../../public/assets/NicolasGauthier_DEV_fr.pdf";
import { motion } from "framer-motion";
import NavLink from "../ui/navlink";
import { TbAwardFilled } from "react-icons/tb";

const UI = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useThemeStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("header");

  const downloadCV = () => {
    const cvUrl = language === "en" ? CV : CV_fr;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nicolas_Gauthier_CV.pdf";
    link.click();
  };
  const translations = useTranslation();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Button
        onClick={downloadCV}
        className='fixed bottom-2 right-2 flex items-center justify-center gap-2 bg-transparent border dark:border-accent/40 text-accent py-2 px-4 md:py-3 md:px-5 rounded-lg shadow-lg hover:bg-accent transition-colors duration-300 z-20 text-sm md:text-base hover:text-primary'
      >
        <span className='hidden md:block'>{translations.downloadCv}</span>
        <span className='block md:hidden'>CV</span>
      </Button>

      <div className='fixed flex items-center text-sm md:text-xl right-2 top-2 text-accent p-2 bg-transparent backdrop-blur-sm rounded-lg shadow-sm z-20 space-x-2 md:space-x-4'>
        <button
          className='bg-transparent p-2 rounded-md hover:underline underline-offset-2 transition-colors duration-300 text-xs md:text-sm font-medium'
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
        >
          {language === "en" ? "Français" : "English"}
        </button>

        <div className='w-px h-4 bg-accent/20 mx-2 md:mx-4' />

        <div
          className='p-2 rounded-md hover:animate-spinOnce cursor-pointer'
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <IoMoon className='text-xl md:text-2xl' />
          ) : (
            <IoSunny className='text-xl md:text-2xl' />
          )}
        </div>
      </div>

      <div className='fixed top-2 left-2 z-30 md:hidden'>
        <Button
          className='text-accent z-40 bg-transparent backdrop-blur-sm rounded-lg shadow-sm border border-white/10 hover:bg-accent/10'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </Button>
      </div>

      <nav
        className={`fixed md:top-1/2 md:transform md:-translate-y-1/2 md:left-0 text-accent p-2 backdrop-blur-xl rounded-lg shadow-sm z-20 transition-all duration-300 md:bg-transparent ${
          isMenuOpen
            ? "top-12 max-w-fit left-1.5 right-3.5 flex justify-start md:justify-center"
            : "hidden md:block"
        }`}
      >
        <motion.ul
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className='space-y-4 md:space-y-8 text-left md:text-left'
        >
          <NavLink
            icon={<IoHome />}
            content={translations.home}
            destination='header'
            isActive={activeSection === "header"}
          />
          <NavLink
            icon={<IoSettingsSharp />}
            content='Services'
            destination='services'
            isActive={activeSection === "services"}
          />
          <NavLink
            icon={<IoFolderOpen />}
            content={translations.projects}
            destination='projects'
            isActive={activeSection === "projects"}
          />
          <NavLink
            icon={<TbAwardFilled />}
            content={translations.certificates}
            destination='certificates'
            isActive={activeSection === "certificates"}
          />
          <NavLink
            icon={<IoPerson />}
            content={translations.about}
            destination='about'
            isActive={activeSection === "about"}
          />
          <NavLink
            icon={<IoMail />}
            content='Contact'
            destination='contact'
            isActive={activeSection === "contact"}
          />
        </motion.ul>
      </nav>
    </>
  );
};

export default UI;
