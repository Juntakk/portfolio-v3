"use client";

import { Code, LayoutDashboard, Smartphone, Gamepad } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: "Web Development",
      description:
        "Building modern, responsive, and scalable websites tailored to your needs.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-accent" />,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile apps with seamless user experiences.",
    },
    {
      icon: <Gamepad className="w-10 h-10 text-accent" />,
      title: "Game Development",
      description:
        "Designing and developing engaging games for web and mobile platforms.",
    },
    {
      icon: <LayoutDashboard className="w-10 h-10 text-accent" />,
      title: "UI/UX Design",
      description:
        "Crafting intuitive and visually stunning interfaces for your applications.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary text-center mb-12">
          What I Offer
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-all duration-300"
            >
              <CardHeader>
                {/* Service Icon */}
                <div className="flex justify-center mb-4">{service.icon}</div>

                {/* Service Title */}
                <CardTitle className="text-xl text-secondary text-center">
                  {service.title}
                </CardTitle>

                {/* Service Description */}
                <CardDescription className="text-muted text-center mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
