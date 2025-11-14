"use client";

import { useThemeStore } from "@/theme/theme";
import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle settings
    const particles = [];
    const particleCount = 20; // Number of particles
    const minRadius = 3; // Minimum particle size
    const maxRadius = 3; // Maximum particle size

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (maxRadius - minRadius) + minRadius,
        dx: (Math.random() - 0.5) * 2, // Horizontal velocity
        dy: (Math.random() - 0.5) * 2, // Vertical velocity
      });
    }

    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === "dark" ? "#fbbf24" : "#33333349";
        ctx.fill();
        ctx.closePath();
      });
    };

    // Update particle positions
    const updateParticles = () => {
      particles.forEach((particle) => {
        // Bounce off edges
        if (
          particle.x + particle.radius > canvas.width ||
          particle.x - particle.radius < 0
        ) {
          particle.dx = -particle.dx;
        }
        if (
          particle.y + particle.radius > canvas.height ||
          particle.y - particle.radius < 0
        ) {
          particle.dy = -particle.dy;
        }

        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;
      });
    };

    // Animation loop
    const animate = () => {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100%",
        zIndex: 1, // Ensure it stays in the background
        pointerEvents: "none", // Allow clicks to pass through
      }}
    />
  );
};

export default ParticlesBackground;
