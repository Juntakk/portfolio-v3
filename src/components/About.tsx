"use client"; // Required for client-side interactivity in Next.js

import Image from "next/image";
import { icons } from "@/data/icons"; // Import icons

const AboutMe = () => {
  // Skills data
  const skills = [
    { name: "Python", icon: icons.python },
    { name: "React", icon: icons.react },
    { name: "Node.js", icon: icons.node },
    { name: "MongoDB", icon: icons.mongo },
    { name: "Next.js", icon: icons.next },
    { name: "Tailwind CSS", icon: icons.tailwind },
    { name: "C++", icon: icons.cPlusPlus },
    { name: "Flutter", icon: icons.flutter },
  ];

  return (
    <section id="about" className="py-16 bg-[#0a192f]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ccd6f6] text-center mb-12">
          About Me
        </h2>

        {/* Introduction with Picture */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto mb-12">
          {/* Rounded Picture */}
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Image
              src="/assets/my_picture.png" // Replace with your picture path
              alt="Nicolas Gauthier"
              fill
              className="rounded-full object-cover border-4 border-[#64ffda]"
            />
          </div>

          {/* Introduction Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-[#8892b0]">
              Hi, I&apos;m Nicolas Gauthier, a passionate developer with
              expertise in building modern web and mobile applications. I love
              solving complex problems and creating user-friendly, scalable
              solutions. With a strong foundation in both frontend and backend
              development, I enjoy working on projects that challenge me to
              learn and grow.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#ccd6f6] text-center mb-8">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-[#112240] border-[#1f2a48] rounded-lg hover:border-[#64ffda] transition-all duration-300"
              >
                <div className="text-[#64ffda] mb-2">
                  <i className="text-4xl">{skill.icon}</i>{" "}
                </div>
                <p className="text-lg text-[#ccd6f6]">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Touch */}
        <div className="max-w-3xl mx-auto text-center mt-12">
          <p className="text-lg text-[#8892b0]">
            When I&apos;m not coding, I enjoy playing video games, exploring new
            technologies, and contributing to open-source projects. I believe in
            continuous learning and always strive to improve my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
