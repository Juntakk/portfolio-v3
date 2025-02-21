/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "500ms",
      },
      rotate: {
        360: "360deg",
      },
      colors: {
        primary: "#0a192f", // Navy blue
        secondary: "#ccd6f6", // Light grayish-blue
        accent: "#52d4ba", // Bright teal
        muted: "#8892b0", // Muted blue-gray
        card: "#112240", // Card background
        border: "#1f2a48", // Card border
      },
      animation: {
        bounce: "bounce 2s infinite",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(180deg, #0a192f 0%, #112240 50%, #1f2a48 100%)",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        glow: "0 0 10px rgba(82, 212, 186, 0.5)", // Glow effect for accent elements
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
