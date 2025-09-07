"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "../../data/projects/data";
import { projects_fr } from "../../data/projects/data_fr";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/theme/LanguageProvider";
import ProjectList from "../ProjectList";

const Projects = () => {
  const translations = useTranslation();
  const language = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(translations.all);

  const translatedProjects =
    language.language === "fr" ? projects_fr : projects;

  const categories = useMemo(() => {
    const allCategories = [
      translations.all,
      ...new Set(translatedProjects.map((project) => project.category)),
    ];
    return allCategories.map(
      (category) => translations[category.toLowerCase()] || category
    );
  }, [translatedProjects, translations]);
  const translatedCategories = categories.map((category) => {
    return translations[category.toLowerCase()] || category;
  });
  const filteredProjects = useMemo(() => {
    return selectedCategory === translations.all
      ? translatedProjects
      : translatedProjects.filter(
          (project) => project.category === selectedCategory
        );
  }, [selectedCategory, translatedProjects, translations.all]);

  useEffect(() => {
    if (!categories.includes(selectedCategory)) {
      setSelectedCategory(translations.all);
    }
  }, [selectedCategory, categories, translations.all]);
  return (
    <section
      id='projects'
      className='min-h-full sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 dark:bg-gray-900'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-200 text-center mb-8 sm:mb-12'
        >
          {translations.projectsTitle}
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          key={language.language}
          initial='hidden'
          whileInView='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className='flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8'
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

        <ProjectList
          filteredProjects={filteredProjects ?? []}
          language={language}
          selectedCategory={selectedCategory}
        />
      </div>
    </section>
  );
};

export default Projects;
