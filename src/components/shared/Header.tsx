"use client";

import { useState, useEffect } from "react"; // Add useState and useEffect
import { motion, AnimatePresence, Variants } from "framer-motion"; // Add Framer Motion
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const translations = useTranslation();
  const words = [translations.word1, translations.word2, translations.word3];
  const titleVariants: Variants = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 20,
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="header"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-white dark:bg-gray-900"
    >
      {/* Greeting */}
      <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        animate={{ opacity: 1, y: 0 }}
        variants={titleVariants}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
      >
        {translations.greeting}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-accent"
        >
          Nicolas Gauthier
        </motion.span>
      </motion.h1>

      {/* Role */}
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mt-4">
        {translations.greeting2}
        <span className="text-accent">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-center"
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        {translations.greeting3}
      </p>

      {/* Call to Action */}
      <Link
        to="projects"
        smooth={true}
        duration={1500}
        aria-label="Scroll to Projects"
      >
        <Button
          variant="outline"
          className="mt-8 text-accent border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
        >
          {translations.workCta}
        </Button>
      </Link>

      {/* Down Arrow */}
      <div className="mt-12 animate-bounce">
        <Link
          to="services"
          smooth={true}
          duration={1500}
          aria-label="Scroll to Services"
        >
          <ArrowDown className="text-accent w-8 h-8 hover:cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
