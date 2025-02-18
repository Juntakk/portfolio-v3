"use client"; // Ensures the component is client-side

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="p-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} NGDev. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
