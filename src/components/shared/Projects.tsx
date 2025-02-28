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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-24 gap-4 sm:gap-6 lg:gap-8" // Responsive minimum height
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Card className="flex justify-evenly h-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 dark:hover:border-accent rounded-lg overflow-hidden hover:border-accent transition-all duration-300 p-4 sm:p-8 md:p-6 max-w-full hover:cursor-pointer">
                    <div className="relative w-full h-full group">
                      {/*Front*/}
                      <div className="flex items-center justify-center text-8xl text-accent w-full h-full transition-all duration-500 group-hover:opacity-0">
                        {project.icon}
                      </div>
                      {/*Back*/}
                      <div className="absolute text-4xl top-0 left-0 bg-green w-full h-full flex items-end justify-end text-accent transition-all duration-500 opacity-0 group-hover:opacity-100">
                        {project.title}
                      </div>
                    </div>
                  </Card>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 border border-accent dark:border-border rounded-lg max-w-sm sm:max-w-xl md:max-w-3xl h-auto max-h-[90vh] mx-4 shadow-xl">
                  <AlertDialogHeader className="w-full px-4 sm:px-6 pt-4 sm:pt-6">
                    <AlertDialogTitle className="text-2xl sm:text-3xl font-bold text-primary dark:text-white/90 text-center">
                      {project.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="mt-2 text-primary dark:text-white/70 text-start">
                      {project.desc}
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  {/* Carousel Section */}
                  <Carousel className="w-full max-w-2xl mx-auto rounded-lg mt-4">
                    <CarouselContent>
                      {project.screenShots.map((screenshot, index) => (
                        <CarouselItem key={index}>
                          <div className="p-2">
                            <Image
                              src={screenshot}
                              alt={`Screenshot ${index + 1}`}
                              width={1980}
                              height={1020}
                              layout="responsive"
                              className="rounded-lg object-cover"
                              quality={100} // Ensure high-quality images
                              priority={index === 0} // Prioritize loading the first image
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    {/* Carousel Navigation Buttons */}
                    {project.screenShots.length > 1 ? (
                      <>
                        <CarouselPrevious className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-primary dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-200 bg-secondary/80 dark:bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-secondary/90 dark:hover:bg-card/90 border border-accent dark:border-border" />
                        <CarouselNext className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-primary dark:text-white hover:text-primary dark:hover:text-secondary transition-colors duration-200 bg-secondary/80 dark:bg-card/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-secondary/90 dark:hover:bg-card/90 border border-muted dark:border-border" />
                      </>
                    ) : (
                      ""
                    )}
                  </Carousel>

                  {/* Footer Section */}
                  <AlertDialogFooter className="mt-6 w-full px-4 sm:px-6 pb-4 sm:pb-2 flex flex-col sm:flex-row sm:justify-end gap-3 sm:gap-4">
                    {/* Tech Stack Icons */}
                    <div className="flex justify-center mb-4 items-center text-center sm:mr-auto sm:ml-4 flex-wrap gap-8 sm:gap-10">
                      {project.icons?.map((icon, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                              <div
                                key={index}
                                className="w-6 h-6 text-primary dark:text-accent text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200 hover:cursor-default"
                              >
                                {icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="top"
                              sideOffset={-3}
                              className="bg-transparent ms-3 mb-1 text-accent rounded-lg py-2 px-3 text-xs sm:text-sm font-mediumshadow-sm"
                            >
                              <p>{project.languages[index]}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>

                    {/* Demo and GitHub Links */}
                    <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 ">
                      {project.demo && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View demo for ${project.title}`}
                          className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary dark:text-accent border border-muted rounded-lg hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/10 dark:hover:text-accent transition-all duration-300 space-x-2 shadow-sm hover:shadow-md"
                        >
                          <span>Demo</span>
                          <FaExternalLinkAlt className="ml-2 text-lg" />
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View GitHub repository for ${project.title}`}
                          className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary dark:text-accent border border-muted rounded-lg hover:bg-accent/10 hover:text-accent dark:hover:bg-accent/10 dark:hover:text-accent transition-all duration-300 space-x-2 shadow-sm hover:shadow-md"
                        >
                          <span>GitHub</span>
                          <FaGithub className="ml-2 text-lg" />
                        </Link>
                      )}
                    </div>

                    {/* Close Button */}
                    <AlertDialogCancel
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 text-primary dark:text-accent hover:text-primary dark:hover:text-secondary transition-colors duration-200 bg-background/80 dark:bg-card/80 backdrop-blur-sm p-2.5 rounded-full hover:bg-background/90 dark:hover:bg-card/90 border border-primary dark:border-border shadow-sm hover:shadow-md"
                      aria-label="Close dialog"
                    >
                      ✕
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
