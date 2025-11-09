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
        primary: "#0a192f",
        secondary: "#ccd6f6",
        accent: "#52d4ba",
        muted: "#8892b0",
        card: "#112240",
        border: "#1f2a48",
      },
      animation: {
        bounce: "bounce 2s infinite",
        spinOnce: "spinOnce 0.8s linear",
        blob: "blob 7s infinite",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(180deg, #0a192f 0%, #112240 50%, #1f2a48 100%)",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        glow: "0 0 10px rgba(82, 212, 186, 0.5)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
