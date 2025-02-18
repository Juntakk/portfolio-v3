"use client"; // Required for client-side interactivity in Next.js

import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const translations = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mb-12"
          variants={childVariants}
        >
          {translations.contactTitle}
        </motion.h2>

        {/* Contact Information */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          variants={childVariants}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {translations.contactHeader}
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="https://linkedin.com/in/nicolasgauthierdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors duration-300"
              variants={childVariants}
            >
              <FaLinkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://github.com/Juntakk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors duration-300"
              variants={childVariants}
            >
              <FaGithub className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-5 sm:mx-auto"
          variants={childVariants}
        >
          <form className="space-y-6">
            {/* Name */}
            <motion.div variants={childVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                {translations.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300"
                placeholder={translations.yourName}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={childVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300"
                placeholder={translations.yourEmail}
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={childVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300"
                placeholder={translations.yourMessage}
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div className="text-center" variants={childVariants}>
              <Button
                variant="outline"
                type="submit"
                className="text-primary dark:text-accent border-primary dark:border-accent hover:bg-accent hover:text-primary dark:hover:bg-accent dark:hover:text-gray-900 transition-colors duration-300"
              >
                {translations.sendMessage}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
