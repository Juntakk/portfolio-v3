"use client"; // Required for client-side interactivity in Next.js

import { motion } from "framer-motion";
import Image from "next/image";
import { icons } from "@/data/icons";

const AboutMe = () => {
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
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          About Me
        </motion.h2>

        {/* Introduction with Picture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto mb-12"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            <Image
              src="/assets/my_picture.png"
              alt="Nicolas Gauthier"
              fill
              className="rounded-full object-cover border-4 border-teal-400 hover:cursor-pointer"
              onClick={() =>
                window.open("https://github.com/Juntakk", "_blank")
              }
            />
          </div>

          <div className="flex-1 text-center md:text-left px-10 max-w-xl">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hi, I&apos;m Nicolas Gauthier, a passionate developer with
              expertise in building modern web and mobile applications. I love
              solving complex problems and creating user-friendly, scalable
              solutions.
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
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
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-teal-400 transition-all duration-300">
                  <div className="text-teal-400 mb-2">
                    <i className="text-4xl">{skill.icon}</i>
                  </div>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-12"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I&apos;m not coding, I enjoy playing video games, exploring new
            technologies, and contributing to open-source projects. I believe in
            continuous learning and always strive to improve my skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
