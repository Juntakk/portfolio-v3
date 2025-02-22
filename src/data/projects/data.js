import { icons, mainIcons } from "../icons"; // Import icons
import images from "../../../public/assets/images";
// Projects data with categories
export const projects = [
  {
    id: 1,
    title: "Chatbot",
    desc: "AI-powered chatbot simulating human-like conversations, leveraging natural language processing and scalable backend systems.",
    icons: [icons.python, icons.django, icons.numpy],
    languages: ["Python", "Django", "Numpy"],
    demo: "",
    github: "https://github.com/Juntakk/chat-bot",
    category: "AI",
    screenShots: images.chatbotScreenShot,
    icon: mainIcons.chatbot,
  },
  {
    id: 2,
    title: "Seeflix",
    desc: "Interactive movie discovery platform with seamless search and user-friendly interface, integrating robust database management.",
    icons: [icons.react, icons.node, icons.mongo],
    languages: ["React", "Node", "Mongo"],
    demo: "https://seeflix.netlify.app/",
    github: "https://github.com/Juntakk/seeflix",
    category: "Web",
    screenShots: images.seeflixScreenshots,
    icon: mainIcons.seeflix,
  },
  {
    id: 3,
    title: "Steem",
    desc: "Full-featured e-commerce platform enabling product browsing, purchasing, and secure transactions.",
    icons: [icons.react, icons.node, icons.mongo],
    languages: ["React", "Node", "Mongo"],
    demo: "https://steemgames.netlify.app/",
    github: "https://github.com/Juntakk/steem",
    category: "Web",
    screenShots: images.steemScreenshots,
    icon: mainIcons.steem,
  },
  {
    id: 4,
    title: "Survivors",
    desc: "Fast-paced 2D shooter game with dynamic enemy waves and responsive controls for an immersive experience.",
    icons: [icons.cPlusPlus, icons.godot],
    languages: ["C++", "Godot"],
    demo: "",
    github: "https://github.com/Juntakk/survivors",
    category: "Games",
    screenShots: images.survivorsScreenshots,
    icon: mainIcons.survivors,
  },
  {
    id: 5,
    title: "RPG",
    desc: "Top-down 2D RPG featuring exploration, combat, and quests with rich visuals and engaging gameplay.",
    icons: [icons.cPlusPlus, icons.raylib, icons.unreal],
    languages: ["C++", "Raylib", "Unreal"],
    demo: "",
    github: "https://github.com/Juntakk/mini-game-3",
    category: "Games",
    icon: mainIcons.rpg,
    screenShots: images.game3ScreenShot,
  },
  {
    id: 6,
    title: "Diet",
    desc: "Meal planning and nutrition tracking app with intuitive UI and seamless user experience to help with planning a diet.",
    icons: [icons.next, icons.tailwind, icons.shadcn],
    languages: ["Next", "Tailwind", "Shadcn"],
    demo: "https://diet-app-ten.vercel.app/",
    github: "https://github.com/Juntakk/diet_app",
    category: "Web",
    screenShots: images.dietAppScreenshot,
    icon: mainIcons.diet,
  },
  {
    id: 7,
    title: "Travel",
    desc: "Travel companion app integrating location-based memory capture and interactive maps for seamless travel planning.",
    icons: [icons.flutter, icons.dart, icons.sql],
    languages: ["Flutter", "Dart", "SQL"],
    demo: "https://diet-app-ten.vercel.app/",
    github: "https://github.com/Juntakk/favorite-places",
    category: "Mobile",
    screenShots: images.favPlaces,
    icon: mainIcons.travel,
  },
  {
    id: 8,
    title: "Blog",
    desc: "Interactive blogging platform with user authentication, post creation, and real-time updates.",
    icons: [icons.flutter, icons.dart, icons.sql],
    languages: ["Flutter", "Dart", "SQL"],
    demo: "",
    github: "https://github.com/Juntakk/blog-app",
    category: "Mobile",
    icon: mainIcons.blog,
    screenShots: images.blogScreenshot,
  },
];
