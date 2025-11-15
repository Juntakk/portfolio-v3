import { useLanguage } from "@/theme/LanguageProvider";

type Translations = {
  [key: string]: string;
};

const translations: { [key: string]: Translations } = {
  en: {
    greeting: "Hi, I'm ",
    greeting2: "",
    greeting3: " Developer",
    workCta: "View My Work",
    word1: "Web",
    word2: "Mobile",
    word3: "Game",
    servicesTitle: "What I Offer",
    webDevelopment: "Full-Stack Web",
    mobileDevelopment: "Mobile",
    gameDevelopment: "Video games",
    uiUxDesign: "UI/UX",
    servicesDesc1: "Building modern websites",
    servicesDesc2: "Creating mobile apps",
    servicesDesc3: "Developing video games",
    servicesDesc4: "Crafting intuitive interfaces",
    projectsTitle: "Some Projects",
    all: "All",
    AI: "AI",
    games: "Games",
    web: "Web",
    mobile: "Mobile",
    aboutTitle: "About Me",
    aboutHeader:
      "Hi, I'm Nicolas Gauthier. I build modern web and mobile apps and love turning complex ideas into simple, enjoyable solutions.",
    skills: "Skills",
    aboutFooter:
      "When I'm not coding, I enjoy playing video games, exploring new technologies, and contributing to open-source projects. I believe in continuous learning and always strive to improve my skills.",
    contactTitle: "Get in Touch",
    contactHeader:
      "I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me via email or connect with me on social media.",
    name: "Name",
    yourName: "Name",
    yourEmail: "Email",
    yourMessage: "Message",
    sendMessage: "Send",
    footer: "All rights reserved.",
    about: "Skills",
    projects: "Projects",
    home: "Home",
    downloadCv: "Download CV",
    nextProject: "Next Project",
    prevProject: "Previous Project",
    certificates: "Certificates",
  },
  fr: {
    greeting: "Allô, je suis ",
    greeting2: "Développeur ",
    greeting3: "",
    workCta: "Voir mon travail",
    word1: "Web",
    word2: "Mobile",
    word3: "de Jeux",
    servicesTitle: "Ce que je propose",
    webDevelopment: "Web Full-Stack",
    mobileDevelopment: "Mobile",
    gameDevelopment: "Jeux Vidéos",
    uiUxDesign: "UI/UX",
    servicesDesc1: "Création de sites web",
    servicesDesc2: "Création d'applications mobiles",
    servicesDesc3: "Conception de jeux vidéos",
    servicesDesc4: "Création d'interfaces intuitives",
    projectsTitle: "Quelques projets",
    all: "Tout",
    AI: "IA",
    games: "Jeux",
    web: "Web",
    mobile: "Mobile",
    aboutTitle: "À propos de moi",
    aboutHeader:
      "Salut, je suis Nicolas Gauthier. Je développe des applications web et mobiles modernes et j'adore transformer des idées complexes en solutions simples et agréables à utiliser.",
    skills: "Compétences",
    aboutFooter:
      "Lorsque je ne code pas, j'aime jouer à des jeux vidéo, explorer de nouvelles technologies et contribuer à des projets open-source. Je crois en l'apprentissage continu et m'efforce toujours d'améliorer mes compétences.",
    contactTitle: "Contactez-moi",
    contactHeader:
      "Je suis toujours ouvert à de nouvelles opportunités, collaborations ou simplement à une discussion amicale. N'hésitez pas à me contacter par email ou à vous connecter avec moi sur les réseaux sociaux.",
    name: "Nom",
    yourName: "Nom",
    yourEmail: "Courriel",
    yourMessage: "Message",
    sendMessage: "Envoyer",
    footer: "Tous droits réservés.",
    about: "Expertise",
    projects: "Projets",
    home: "Accueil",
    downloadCv: "Télécharger CV",
    nextProject: "Projet Suivant",
    prevProject: "Projet Précédent",
    certificates: "Certificats",
  },
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const currentLanguage =
    language && ["en", "fr"].includes(language) ? language : "fr";

  return translations[currentLanguage];
};
