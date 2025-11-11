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
    () => filteredProjects[currentIndex] || filteredProjects[0],
    [filteredProjects, currentIndex]
  );

  return (
    <motion.div
      key={`${selectedCategory}-${language.language}`}
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
      className='min-h-full pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-24 gap-4 sm:gap-6 lg:gap-8'
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
              <Card className='flex justify-evenly h-48 bg-white dark:bg-gray-800 border border-accent dark:border-accent dark:hover:border-accent rounded-lg overflow-hidden hover:border-accent transition-all duration-300 p-4 sm:p-8 md:p-6 max-w-full hover:cursor-pointer'>
                <div className='relative w-full h-full group'>
                  {/* Front */}
                  <div
                    className='flex items-center justify-center text-8xl text-accent w-full h-full transition-all duration-500 group-hover:opacity-0'
                    aria-hidden='true'
                  >
                    {project.icon}
                  </div>
                  {/* Back */}
                  <div className='absolute text-4xl top-0 left-0 bg-green w-full h-full flex items-end justify-end text-accent transition-all duration-500 opacity-0 group-hover:opacity-100'>
                    {project.title}
                  </div>
                </div>
              </Card>
            </AlertDialogTrigger>
            <AlertDialogContent className='flex flex-col bg-white dark:bg-gray-900 border border-accent dark:border-accent rounded-lg max-w-sm sm:max-w-xl md:max-w-3xl max-h-[95vh] mx-4 shadow-xl overflow-hidden'>
              {/* Close Button */}
              <AlertDialogCancel
                className='absolute top-3 right-3 sm:top-4 sm:right-4 z-50 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 border-0 shadow-md hover:shadow-lg'
                aria-label='Close dialog'
              >
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </AlertDialogCancel>

              {/* Header */}
              <AlertDialogHeader className='px-4 sm:px-6 pt-4 sm:pt-6 pb-3 border-b border-gray-200 dark:border-gray-700'>
                <AlertDialogTitle className='text-2xl sm:text-3xl font-bold text-primary dark:text-white/90 text-center pr-8'>
                  {currentProject.title}
                </AlertDialogTitle>
                <AlertDialogDescription className='mt-2 text-primary dark:text-white/70 text-center leading-relaxed'>
                  {currentProject.desc}
                </AlertDialogDescription>
              </AlertDialogHeader>

              {/* Carousel */}
              <div className='flex-1 overflow-y-auto px-4 sm:px-12 py-4'>
                <ProjectCarousel
                  project={currentProject}
                  currentIndex={currentIndex}
                />
              </div>

              {/* Footer */}
              <AlertDialogFooter className='px-4 sm:px-6 pb-4 sm:pb-2 pt-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30'>
                <div className='w-full space-y-4'>
                  {/* Technologies */}
                  {currentProject.icons && currentProject.icons.length > 0 && (
                    <div className='flex justify-center items-center flex-wrap gap-4 sm:gap-6'>
                      {currentProject.icons.map((icon, index) => (
                        <TooltipProvider key={index}>
                          <Tooltip delayDuration={200}>
                            <TooltipTrigger asChild>
                              <div
                                className='text-2xl sm:text-3xl text-primary dark:text-accent hover:scale-110 transition-transform duration-200 cursor-default'
                                aria-label={currentProject.languages[index]}
                              >
                                {icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side='top'
                              className='bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded'
                            >
                              <p>{currentProject.languages[index]}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    {/* Navigation */}
                    {filteredProjects.length > 1 && (
                      <div className='flex items-center gap-3'>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                onClick={handlePrevious}
                                variant='outline'
                                size='sm'
                                className='text-primary dark:text-accent border-muted dark:border-accent hover:bg-accent/10 hover:text-accent'
                              >
                                <ArrowLeft className='w-4 h-4' />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side='top'>
                              <p>{translations.prevProject}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <span className='text-sm text-gray-500 dark:text-gray-400 min-w-[3rem] text-center'>
                          {currentIndex + 1} / {filteredProjects.length}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                onClick={handleNext}
                                variant='outline'
                                size='sm'
                                className='text-primary dark:text-accent border-muted dark:border-accent hover:bg-accent/10 hover:text-accent'
                              >
                                <ArrowRight className='w-4 h-4' />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side='top'>
                              <p>{translations.nextProject}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className='flex items-center gap-2 sm:gap-3 sm:ml-auto'>
                      {currentProject.demo && (
                        <Link
                          href={currentProject.demo}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary dark:text-accent border border-muted dark:border-accent rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200 shadow-sm hover:shadow-md'
                          aria-label={`View demo for ${currentProject.title}`}
                        >
                          Demo
                          <FaExternalLinkAlt className='w-3.5 h-3.5' />
                        </Link>
                      )}
                      {currentProject.github && (
                        <Link
                          href={currentProject.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-primary dark:text-accent border border-muted dark:border-accent rounded-lg hover:bg-accent/10 hover:text-accent transition-all duration-200 shadow-sm hover:shadow-md'
                          aria-label={`View GitHub repository for ${currentProject.title}`}
                        >
                          <FaGithub className='w-4 h-4' />
                          GitHub
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
