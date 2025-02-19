"use client"; // Required for client-side interactivity in Next.js

import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const Contact = () => {
  const translations = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.25, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="contact"
      className="py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.div
        className="container mx-auto px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 text-center mb-6"
          variants={childVariants}
        >
          {translations.contactTitle}
        </motion.h2>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center gap-8 mb-12"
          variants={childVariants}
        >
          <motion.a
            href="https://linkedin.com/in/nicolasgauthierdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors duration-300"
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className="w-10 h-10" />
          </motion.a>
          <motion.a
            href="https://github.com/Juntakk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-100 hover:text-accent dark:hover:text-accent transition-colors duration-300"
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub className="w-10 h-10" />
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-6 sm:mx-auto"
          variants={childVariants}
        >
          <form className="space-y-8">
            {/* Name */}
            <motion.div variants={childVariants}>
              <Label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                {translations.name}
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300"
                placeholder={translations.yourName}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={childVariants}>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300"
                placeholder={translations.yourEmail}
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={childVariants}>
              <Label
                htmlFor="message"
                className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300"
                placeholder={translations.yourMessage}
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div className="text-center" variants={childVariants}>
              <Button
                variant="outline"
                type="submit"
                className="text-md p-4 text-primary dark:text-accent border-primary dark:border-accent hover:bg-accent hover:text-primary dark:hover:bg-accent dark:hover:text-gray-900 transition-all duration-500"
              >
                {translations.sendMessage}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
