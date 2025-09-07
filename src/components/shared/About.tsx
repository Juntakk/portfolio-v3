"use client"; // Required for client-side interactivity in Next.js

import { motion } from "framer-motion";
import Image from "next/image";
import { icons } from "@/data/icons";
import { useTranslation } from "@/hooks/useTranslation";

const AboutMe = () => {
  const skills = [
    { name: "Python", icon: icons.python },
    { name: "React", icon: icons.react },
    { name: "Node", icon: icons.node },
    { name: "Volleyball", icon: icons.volleyball },
    { name: "Next", icon: icons.next },
    { name: "Tailwind", icon: icons.tailwind },
    { name: "C++", icon: icons.cPlusPlus },
    { name: "Flutter", icon: icons.flutter },
  ];
  const translations = useTranslation();

  return (
    <section id='about' className='bg-gray-100 dark:bg-gray-900'>
      <div className='py-12 sm:py-24 px-4 sm:px-12 lg:px-8 overflow-hidden bg-gray-50 dark:bg-gray-900'>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 text-center mb-12'
        >
          {translations.aboutTitle}
        </motion.h2>

        {/* Introduction with Picture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-6xl mx-auto mb-12'
        >
          <div className='w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 relative'>
            <Image
              src='/assets/my_picture.png'
              alt='Nicolas Gauthier'
              fill
              className='rounded-full object-cover border-4 border-teal-400 hover:cursor-pointer'
              onClick={() =>
                window.open("https://github.com/Juntakk", "_blank")
              }
            />
          </div>

          <div className='flex-1 text-center md:text-left px-4 sm:px-6 max-w-xl'>
            <p className='text-base leading-relaxed sm:text-lg text-gray-700 dark:text-gray-300 sm:block hidden '>
              {translations.aboutHeader}
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className='max-w-4xl mx-auto'
        >
          <h3 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-200 text-center mb-8'>
            {translations.skills}
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className='flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-teal-400 transition-all duration-300'>
                  <div className='text-teal-400 mb-2'>
                    <i className='text-3xl sm:text-4xl'>{skill.icon}</i>
                  </div>
                  <p className='text-sm sm:text-lg text-gray-900 dark:text-white'>
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className='max-w-3xl mx-auto text-center mt-12 px-4 sm:px-6'
        >
          <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300 sm:block hidden leading-relaxed'>
            {translations.aboutFooter}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
