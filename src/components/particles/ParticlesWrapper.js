"use client"; // Mark this component as a Client Component

import dynamic from "next/dynamic";

// Dynamically import the ParticlesBackground component with SSR disabled
const ParticlesBackground = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
});

const ParticlesWrapper = () => {
  return <ParticlesBackground />;
};

export default ParticlesWrapper;
