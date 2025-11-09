"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-scroll";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hover, setHover] = useState(false);
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
      id='header'
      className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900'
    >
      <motion.h1
        initial='offscreen'
        whileInView='onscreen'
        animate={{ opacity: 1, y: 0 }}
        variants={titleVariants}
        transition={{ duration: 1, ease: "easeOut" }}
        className='mb-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white md:mx-8'
      >
        {translations.greeting}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className='text-accent'
        >
          Nicolas Gauthier
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300'
      >
        {translations.greeting2}
        <span className='text-accent'>
          <AnimatePresence mode='wait'>
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              variants={titleVariants}
              className='inline-block text-center'
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        {translations.greeting3}
      </motion.p>

      <motion.div
        className='mt-12'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <Link
          to='services'
          smooth={true}
          duration={1500}
          aria-label='Scroll to Services'
        >
          <Play
            className='text-accent w-14 h-14 hover:cursor-pointer rotate-90'
            onMouseEnter={() => setTimeout(() => setHover(true), 100)}
            onMouseLeave={() => setTimeout(() => setHover(false), 200)}
            fill={hover ? "currentColor" : "none"}
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default Header;
