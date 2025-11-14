"use client";

import { Code, LayoutDashboard, Smartphone, Gamepad } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion, Variants, useInView } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useRef } from "react";

const Services = () => {
  const translations = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: translations.webDevelopment,
      description: translations.servicesDesc1,
    },
    {
      icon: Smartphone,
      title: translations.mobileDevelopment,
      description: translations.servicesDesc2,
    },
    {
      icon: Gamepad,
      title: translations.gameDevelopment,
      description: translations.servicesDesc3,
    },
    {
      icon: LayoutDashboard,
      title: translations.uiUxDesign,
      description: translations.servicesDesc4,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const iconVariants: Variants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
        rotate: {
          type: "tween",
          duration: 0.5,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id='services'
      className='sm:pb-0 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900'
    >
      <div className='container flex flex-col items-center mx-auto max-w-7xl'>
        {/* <motion.h2
          variants={titleVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-200 text-center mb-12 sm:mb-16'
        >
          {translations.servicesTitle}
        </motion.h2> */}

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className='h-full w-80 sm:w-full'
              >
                <Card className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-accent transition-all duration-300 cursor-pointer group relative overflow-hidden'>
                  {/* Subtle gradient on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none' />

                  <CardHeader className='relative z-10 p-6 sm:p-8'>
                    <motion.div
                      className='flex justify-center mb-6'
                      variants={iconVariants}
                      initial='rest'
                      whileHover='hover'
                    >
                      <div className='p-4 rounded-2xl bg-accent/10 dark:bg-accent/20 group-hover:bg-accent/20 dark:group-hover:bg-accent/30 transition-colors duration-300'>
                        <IconComponent className='w-8 h-8 sm:w-10 sm:h-10 text-accent' />
                      </div>
                    </motion.div>

                    <CardTitle className='text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-3 cursor-default group-hover:text-accent transition-colors duration-300'>
                      {service.title}
                    </CardTitle>

                    <CardDescription className='text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center leading-relaxed cursor-default'>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
