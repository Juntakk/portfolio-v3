"use client"; // Required for client-side interactivity in Next.js

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // React Icons for demo and GitHub
import { projects } from "../data/projects/data";
import { Card } from "./ui/card";

const Projects = () => {
  // State to hold selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from the projects
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-16 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] text-center mb-12">
          My Projects
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              size={"lg"}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${
                selectedCategory === category
                  ? "bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda] hover:text-[#0a192f]"
                  : "text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
              } transition-colors duration-300`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-evenly bg-[#112240] border-[#1f2a48] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 p-6"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-[#8892b0] mb-4">{project.desc}</p>

              {/* Tech Stack Icons */}
              <div className="flex gap-2 mb-4">
                {project.icons.map((icon, index) => (
                  <div key={index} className="w-6 h-6 text-[#64ffda]">
                    <p className="text-xl">{icon}</p>{" "}
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
                      className="text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="mr-2 w-4 h-4" />
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
                      className="text-[#64ffda] border-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-300"
                    >
                      <FaGithub className="mr-2 w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
