"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence, Variants, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const translations = useTranslation();
  const words = [translations.word1, translations.word2, translations.word3];
  const name = "Nicolas Gauthier";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Split name into letters for stagger animation
  const nameLetters = useMemo(() => name.split(""), []);
  const greetingLetters = useMemo(
    () => translations.greeting.split(""),
    [translations.greeting]
  );

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [words.length]);

  // Container variants for stagger effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  // Letter variants for stagger animation
  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Title container variants
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  // Name letter variants with gradient effect
  const nameLetterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.5,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  // Word animation variants - improved
  const wordVariants: Variants = {
    enter: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -90,
      filter: "blur(10px)",
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      rotateX: 90,
      filter: "blur(10px)",
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  // Scroll button variants
  const scrollButtonVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.15,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      ref={ref}
      id='header'
      className='flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900'
    >
      {/* Greeting text with letter-by-letter animation */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        className='mb-2 cursor-default'
      >
        <motion.span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 inline-block'>
          {greetingLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className='inline-block'
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.div>

      {/* Name with enhanced stagger animation */}
      <motion.h1
        variants={titleContainerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        className='mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white md:mx-8 cursor-default'
      >
        <span className='inline-block'>
          {nameLetters.map((letter, index) => (
            <motion.span
              key={index}
              variants={nameLetterVariants}
              className='inline-block text-accent relative'
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Subtitle with improved word rotation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className='text-lg cursor-default sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center'
      >
        <span>{translations.greeting2}</span>
        <span className='text-accent mx-2 inline-block min-w-[100px] text-center relative'>
          <AnimatePresence mode='wait'>
            <motion.span
              key={currentWordIndex}
              variants={wordVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='inline-block font-semibold'
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>{translations.greeting3}</span>
      </motion.div>

      {/* Scroll button */}
      <motion.div
        variants={scrollButtonVariants}
        initial='initial'
        animate='animate'
        className='mt-12 sm:mt-16'
      >
        <Link
          to='services'
          smooth={true}
          duration={1500}
          aria-label='Scroll to Services'
        >
          <motion.div
            className='flex flex-col items-center justify-center cursor-pointer group'
            whileHover='hover'
            whileTap='tap'
          >
            <motion.div className='p-3 sm:p-4 rounded-full bg-accent/10 dark:bg-accent/20 backdrop-blur-sm border border-accent/50 transition-all duration-300 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 group-hover:border-accent'>
              <ChevronDown className='text-accent w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:translate-y-1' />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Header;
