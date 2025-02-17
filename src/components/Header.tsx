"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section
      id="header"
      className="h-screen flex flex-col justify-center items-center text-center bg-primary px-4"
    >
      {/* Greeting */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary">
        Hi, I&apos;m <span className="text-accent">Nicolas Gauthier</span>
      </h1>

      {/* Role */}
      <p className="text-xl md:text-2xl lg:text-3xl text-muted mt-4">
        A <span className="text-accent">Web Developer</span> building modern and
        scalable solutions.
      </p>

      {/* Call to Action */}
      <Link
        to="projects"
        smooth={true}
        duration={1500}
        aria-label="Scroll to Projects"
      >
        <Button
          variant="outline"
          className="mt-8 text-accent border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
        >
          View My Work
        </Button>
      </Link>

      {/* Down Arrow */}
      <div className="mt-12 animate-bounce">
        <Link
          to="services"
          smooth={true}
          duration={1500}
          aria-label="Scroll to Services"
        >
          <ArrowDown className="text-accent w-8 h-8 hover:cursor-pointer" />
        </Link>
      </div>
    </section>
  );
};

export default Header;
