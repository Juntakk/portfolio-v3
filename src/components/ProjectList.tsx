import { LanguageHook, Project } from "@/types";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Card } from "./ui/card";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectCarousel from "./ProjectCarousel";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ProjectList = ({
  filteredProjects,
  language,
  selectedCategory,
}: {
  filteredProjects: Project[];
  language: LanguageHook;
  selectedCategory: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translations = useTranslation();

  useEffect(() => {
    setCurrentIndex(0);
  }, [filteredProjects]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = useMemo(
    () => filteredProjects[currentIndex] || filteredProjects[0], // Ensure valid index
    [filteredProjects, currentIndex]
  );

  return (
    <motion.div
      key={`${selectedCategory}-${language.language}`} // Optimisation du key
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className="min-h-full pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-24 gap-4 sm:gap-6 lg:gap-8"
    >
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
          }}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild onClick={() => handleOpen(index)}>
              <Card className="flex justify-evenly h-48 bg-white dark:bg-gray-800 border border-accent dark:border-accent dark:hover:border-accent rounded-lg overflow-hidden hover:border-accent transition-all duration-300 p-4 sm:p-8 md:p-6 max-w-full hover:cursor-pointer">
                <div className="relative w-full h-full group">
                  {/* Front */}
                  <div
                    className="flex items-center justify-center text-8xl text-accent w-full h-full transition-all duration-500 group-hover:opacity-0"
                    aria-hidden="true"
                  >
                    {project.icon}
                  </div>
                  {/* Back */}
                  <div className="absolute text-4xl top-0 left-0 bg-green w-full h-full flex items-end justify-end text-accent transition-all duration-500 opacity-0 group-hover:opacity-100">
                    {project.title}
                  </div>
                </div>
              </Card>
            </AlertDialogTrigger>
            <AlertDialogContent className="flex flex-col justify-center items-center bg-white dark:bg-gray-900 border border-accent dark:border-accent rounded-lg max-w-sm sm:max-w-xl p-5 md:max-w-3xl max-h-[95vh] mx-4 shadow-xl">
              <AlertDialogHeader className="w-full px-4 sm:px-6 pt-4 sm:pt-6">
                <AlertDialogTitle className="text-2xl sm:text-3xl mb-2 font-bold text-primary dark:text-white/90 text-center">
                  {currentProject.title}
                </AlertDialogTitle>
                <AlertDialogDescription className="mt-2 text-primary dark:text-white/70 text-center leading-relaxed">
                  {currentProject.desc}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <ProjectCarousel project={currentProject} />
              <AlertDialogFooter className="w-full mt-4 px-4 sm:px-6 pb-4 sm:pb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-8 text-center">
                {/* Language Icons */}
                <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-8 w-full sm:w-1/3">
                  {currentProject.icons?.map((icon, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <div
                            className="w-6 h-6 text-primary dark:text-accent text-3xl sm:text-4xl hover:scale-110 transition-transform duration-200 hover:cursor-default"
                            aria-label={currentProject.languages[index]}
                          >
                            {icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          sideOffset={0}
                          className="bg-transparent text-accent rounded-lg py-2 ml-3 text-xs sm:text-sm font-medium shadow-sm"
                        >
                          <p>{currentProject.languages[index]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center items-center gap-2 sm:gap-4 w-full sm:w-1/3">
                  {currentProject.demo && (
                    <Link
                      href={currentProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary dark:text-accent border border-muted dark:border-accent rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={`View demo for ${currentProject.title}`}
                    >
                      Demo <FaExternalLinkAlt className="ml-2 text-lg" />
                    </Link>
                  )}
                  {currentProject.github && (
                    <Link
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary dark:text-accent border border-muted dark:border-accent rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={`View GitHub repository for ${currentProject.title}`}
                    >
                      GitHub <FaGithub className="ml-2 text-lg" />
                    </Link>
                  )}
                </div>

                {/* Previous/Next Buttons */}
                <div className="flex justify-center items-center gap-2 w-full sm:w-1/3">
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={handlePrevious}
                          className="text-primary bg-transparent dark:text-accent border border-muted dark:border-accent rounded-lg hover:bg-accent/10 hover:text-accent hover:scale-110 transition-transform duration-200 shadow-sm hover:shadow-md"
                        >
                          <ArrowLeft />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        sideOffset={0}
                        className="bg-transparent text-accent rounded-lg py-2 text-xs mr-1 sm:text-sm font-medium shadow-sm"
                      >
                        <p>{translations.prevProject}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Button
                          onClick={handleNext}
                          className="text-primary bg-transparent dark:text-accent border border-muted dark:border-accent rounded-lg hover:bg-accent/10 hover:text-accent hover:scale-110 transition-transform duration-200 shadow-sm hover:shadow-md"
                        >
                          <ArrowRight />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        sideOffset={0}
                        className="bg-transparent text-accent rounded-lg py-2 text-xs mr-1 sm:text-sm font-medium shadow-sm"
                      >
                        <p>{translations.nextProject}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <AlertDialogCancel
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-primary dark:text-accent dark:hover:bg-accent hover:text-primary dark:hover:text-primary transition-colors duration-200 bg-background/80 dark:bg-card/80 backdrop-blur-sm p-2.5 rounded-full hover:bg-background/90 border border-primary dark:border-accent shadow-sm hover:shadow-md"
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
  );
};

export default ProjectList;
