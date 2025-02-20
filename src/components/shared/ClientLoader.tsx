"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ClientLoader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
          >
            {/* Fluid Water-Like Animation */}
            <motion.div
              className="relative w-full h-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Fluid Waves */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0], // Expand and then contract
                    opacity: [0, 1, 0], // Fade in and then out
                  }}
                  transition={{
                    delay: i * 0.2,
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 m-auto border-4 border-accent rounded-full aspect-square"
                  style={{
                    width: `${(i + 1) * 20}%`, // Adjust the size of the waves
                  }}
                />
              ))}

              {/* Central Orb */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }} // Expand and then contract
                transition={{
                  delay: 0.5,
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 m-auto w-24 h-24 bg-accent rounded-full aspect-square"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
};

export default ClientLoader;
