"use client";

import { Code, LayoutDashboard, Smartphone, Gamepad } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const translations = useTranslation();
  const services = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: translations.webDevelopment,
      description: translations.servicesDesc1,
    },
    {
      icon: <Smartphone className="w-10 h-10 text-accent" />,
      title: translations.mobileDevelopment,
      description: translations.servicesDesc2,
    },
    {
      icon: <Gamepad className="w-10 h-10 text-accent" />,
      title: translations.gameDevelopment,
      description: translations.servicesDesc3,
    },
    {
      icon: <LayoutDashboard className="w-10 h-10 text-accent" />,
      title: translations.uiUxDesign,
      description: translations.servicesDesc4,
    },
  ];

  const titleVariants: Variants = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 600, damping: 20 },
    },
  };

  const cardVariants: Variants = {
    offscreen: { opacity: 0, x: 100 },
    onscreen: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2 + index * 0.2,
      },
    }),
  };

  return (
    <section
      id="services"
      className="py-16 px-8 overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-12">
        {/* Section Title */}
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5 }}
          variants={titleVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          {translations.servicesTitle}
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.5 }}
              variants={cardVariants}
              custom={index}
            >
              <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-accent transition-transform duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-accent">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white text-center">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300 text-center mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
