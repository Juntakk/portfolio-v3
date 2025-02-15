"use client"; // Required for client-side interactivity in Next.js

import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // React Icons for demo and GitHub
import { icons } from "@/data/icons"; // Import icons

const Projects = () => {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "Chatbot",
      desc: "AI Project: A chatbot built with Python, Django, and NumPy.",
      icons: [icons.python, icons.django, icons.numpy],
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Seeflix",
      desc: "Movie search platform built with React, Node.js, and MongoDB.",
      icons: [icons.react, icons.node, icons.mongo],
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "E-Commerce",
      desc: "Commerce platform built with React, Node.js, and MongoDB.",
      icons: [icons.react, icons.node, icons.mongo],
      demo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Bullet-hell Game",
      desc: "2D bullet-hell game developed with C++ and Godot.",
      icons: [icons.cPlusPlus, icons.godot],
      demo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "RPG Game",
      desc: "Top-down 2D RPG built with C++, Raylib, and Unreal Engine.",
      icons: [icons.cPlusPlus, icons.raylib, icons.unreal],
      demo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Diet App",
      desc: "Meal planning app built with Next.js, Tailwind CSS, and TypeScript.",
      icons: [icons.next, icons.tailwind, icons.shadcn],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] text-center mb-12">
          My Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#112240] border-[#1f2a48] rounded-lg overflow-hidden hover:border-[#64ffda] transition-all duration-300 p-6"
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-[#8892b0] mb-4">{project.desc}</p>

              {/* Tech Stack Icons */}
              <div className="flex gap-2 mb-4">
                {project.icons.map((Icon, index) => (
                  <Icon key={index} className="w-6 h-6 text-[#64ffda]" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
