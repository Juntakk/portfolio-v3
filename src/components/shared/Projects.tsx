"use client"; // Required for client-side interactivity in Next.js

import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // React Icons for demo and GitHub
import { projects } from "../../data/projects/data";
import { Card } from "../ui/card";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-16 px-12 sm:px-6 lg:px-20 overflow-hidden bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12"
        >
          My Projects
        </motion.h2>

        {/* Category Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Button
                size="lg"
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-accent dark:text-primary hover:bg-accent-dark"
                    : "text-gray-800 dark:text-gray-300 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                } transition-colors duration-300`}
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
          key={selectedCategory}
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 cursor-default">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="sm:h-40 h-20 text-gray-600 dark:text-gray-400 mb-4 cursor-default">
                  {project.desc}
                </p>

                {/* Tech Stack Icons */}
                <div className="flex gap-2 mb-4">
                  {project.icons.map((icon, index) => (
                    <div key={index} className="w-6 h-6 text-accent text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="text-accent border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
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
                    >
                      <Button
                        variant="outline"
                        className="text-accent border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
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
