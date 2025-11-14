/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Required for client-side interactivity in Next.js

import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useLanguage } from "@/theme/LanguageProvider";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const Contact = () => {
  const translations = useTranslation();
  const [loading, setLoading] = useState(false);
  const language = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      const result = await emailjs.send(
        "service_1ke57ce",
        "template_zrerjkw",
        {
          to_name: "Nick",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "78CM3jHVxqrSQ8s3i"
      );

      const successMessage =
        language.language === "en"
          ? "Message sent successfully, talk to you soon!"
          : "Message envoyé avec succès, à bientôt !";

      toast.success(successMessage, {
        duration: 4000,
        position: "bottom-left",
        className:
          "bg-white dark:bg-gray-900 text-primary dark:text-white/90 border border-accent dark:border-accent shadow-md rounded-lg px-6 py-4 flex items-center gap-3 text-sm sm:text-base font-medium",
        style: {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        },
        iconTheme: {
          primary: "#fbbf24",
          secondary: "#333333",
        },
        removeDelay: 3000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("There was an error sending the message.");
    } finally {
      setLoading(false);
    }
  };
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
      id='contact'
      className='px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300'
    >
      <motion.div
        className='container mx-auto px-4 sm:px-6'
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        {/* <motion.h2
          className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 text-center mb-6'
          variants={childVariants}
        >
          {translations.contactTitle}
        </motion.h2> */}

        {/* Social Media Links */}
        <motion.div
          className='flex justify-center gap-6 sm:gap-8 mb-8'
          variants={childVariants}
        >
          <motion.a
            href='https://linkedin.com/in/nicolasgauthierdev'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-800 dark:text-gray-200 hover:text-accent transition-colors duration-300'
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin className='w-10 h-10 sm:w-14 dark:hover:text-accent sm:h-14 text-gray-500 dark:text-gray-400 hover:text-accent' />
          </motion.a>
          <motion.a
            href='https://github.com/Juntakk'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-100 dark:text-gray-200 hover:text-accent transition-colors duration-300'
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub className='w-10 h-10 sm:w-14 sm:h-14 text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent' />
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className='max-w-2xl mx-4 sm:mx-auto'
          variants={childVariants}
        >
          <form onSubmit={handleSubmit} className='space-y-6 sm:space-y-8'>
            {/* Name */}
            <motion.div variants={childVariants}>
              {/* <Label
                htmlFor='name'
                className='block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2'
              >
                {translations.name}
              </Label> */}
              <Input
                type='text'
                id='name'
                name='name'
                className='w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300'
                placeholder={translations.yourName}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={childVariants}>
              {/* <Label
                htmlFor='email'
                className='block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2'
              >
                Email
              </Label> */}
              <Input
                type='email'
                id='email'
                name='email'
                className='w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300'
                placeholder={translations.yourEmail}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={childVariants}>
              {/* <Label
                htmlFor='message'
                className='block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2'
              >
                Message
              </Label> */}
              <Textarea
                id='message'
                name='message'
                rows={5}
                className='w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-100 focus:border-accent focus:ring-accent transition-colors duration-300'
                placeholder={translations.yourMessage}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div className='text-center' variants={childVariants}>
              <Button
                variant='outline'
                className='w-full sm:w-auto text-md p-4 text-primary dark:text-accent border-primary dark:border-accent hover:bg-accent hover:text-primary dark:hover:bg-accent dark:hover:text-gray-900 transition-all duration-500'
                type='submit'
                disabled={loading}
              >
                {loading ? "Sending..." : translations.sendMessage}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
