"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
      <Button
        variant="outline"
        className="mt-8 text-accent border-accent hover:bg-accent hover:text-primary transition-colors duration-300"
      >
        View My Work
      </Button>

      {/* Down Arrow */}
      <div className="mt-12 animate-bounce">
        <ArrowDown className="text-accent w-8 h-8" />
      </div>
    </section>
  );
};

export default Header;
