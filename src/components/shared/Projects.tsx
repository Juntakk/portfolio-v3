"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../../data/projects/data";
import { projects_fr } from "../../data/projects/data_fr";
import { Card } from "../ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/theme/LanguageProvider";

const Projects = () => {
  const translations = useTranslation();
  const language = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(translations.all);

  // Reset selectedCategory when language changes
  useEffect(() => {
    setSelectedCategory(translations.all);
  }, [language.language, translations.all]);

  // Get translated projects based on language
  const translatedProjects =
    language.language === "fr" ? projects_fr : projects;

  // Generate categories from translated projects
  const categories = [
    translations.all,
    ...new Set(translatedProjects.map((project) => project.category)),
  ];

  // Translate category names (if translations exist)
  const translatedCategories = categories.map((category) => {
    return translations[category] || category; // Fallback to the original category if no translation exists
  });

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === translations.all
      ? translatedProjects
      : translatedProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section
      id="projects"
      className="py-24 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-8 sm:mb-12"
        >
          {translations.projectsTitle}
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          key={language.language}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {translatedCategories.map((category) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                size="sm" // Responsive button size
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-accent text-primary hover:bg-accent-dark dark:bg-accent-dark dark:hover:bg-accent-darker" // Default variant
                    : "bg-transparent text-accent border-accent hover:bg-accent/10 dark:text-accent dark:border-accent dark:hover:bg-accent/20" // Outline variant
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          initial="hidden"
          key={selectedCategory + language.language} // Force re-render on language or category change
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 min-h-[400px] sm:min-h-[500px]" // Responsive minimum height
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Card className="flex flex-col justify-evenly bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg hover:border-accent transition-all duration-300 p-4 sm:p-5 md:p-6 max-w-full">
                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 cursor-default">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="h-16 sm:h-32 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 cursor-default">
                  {project.desc}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex gap-4 sm:gap-6 mt-4 mb-6 sm:mb-8">
                  {project.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 text-accent text-2xl sm:text-3xl"
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View demo for ${project.title}`}
                    >
                      <Button
                        size="sm" // Responsive button size
                        variant="outline"
                        className="text-accent border-accent hover:bg-accent/10 dark:text-accent dark:border-accent dark:hover:bg-accent/20"
                      >
                        <FaExternalLinkAlt className="mr-1 w-4 h-4" />
                        Demo
                      </Button>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <Button
                        size="sm" // Responsive button size
                        variant="outline"
                        className="text-accent border-accent hover:bg-accent/10 dark:text-accent dark:border-accent dark:hover:bg-accent/20"
                      >
                        <FaGithub className="mr-1 w-4 h-4" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
