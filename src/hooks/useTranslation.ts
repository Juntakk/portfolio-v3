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
    word3: "Video Game",
    servicesTitle: "What I Offer",
    webDevelopment: "Full-Stack Web",
    mobileDevelopment: "Mobile",
    gameDevelopment: "Video games",
    uiUxDesign: "UI/UX",
    servicesDesc1:
      "Building modern, responsive, and scalable tailored deployed websites.",
    servicesDesc2:
      "Creating cross-platform mobile apps with seamless user experiences.",
    servicesDesc3:
      "Designing and developing engaging games for web and mobile platforms.",
    servicesDesc4:
      "Crafting intuitive and visually stunning interfaces for your applications.",
    projectsTitle: "My Projects",
    all: "All",
    AI: "AI",
    games: "Jeux",
    web: "Web",
    mobile: "Mobile",
    aboutTitle: "About Me",
    aboutHeader:
      "Hi, I'm Nicolas Gauthier, a passionate developer with expertise in building modern web and mobile applications. I love solving complex problems and creating user-friendly, scalable solutions.",
    skills: "Skills",
    aboutFooter:
      "When I'm not coding, I enjoy playing video games, exploring new technologies, and contributing to open-source projects. I believe in continuous learning and always strive to improve my skills.",
    contactTitle: "Get in Touch",
    contactHeader:
      "I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out to me via email or connect with me on social media.",
    name: "Name",
    yourName: "Your Name",
    yourEmail: "your-email@example.com",
    yourMessage: "Your Message",
    sendMessage: "Send",
    footer: "All rights reserved.",
    about: "About",
    projects: "Projects",
    home: "Home",
    downloadCv: "Download CV",
  },
  fr: {
    greeting: "Allô, je suis ",
    greeting2: "Développeur ",
    greeting3: "",
    workCta: "Voir mon travail",
    word1: "Web",
    word2: "Mobile",
    word3: "de Jeux Vidéos",
    servicesTitle: "Ce que je propose",
    webDevelopment: "Web Full-Stack",
    mobileDevelopment: "Mobile",
    gameDevelopment: "Jeux Vidéos",
    uiUxDesign: "UI/UX",
    servicesDesc1:
      "Création de sites web modernes, réactifs et évolutifs, adaptés à vos besoins et budgets.",
    servicesDesc2:
      "Création d'applications mobiles multiplateformes avec une expérience utilisateur fluide.",
    servicesDesc3:
      "Conception et développement de jeux engageants pour les plateformes web et mobiles.",
    servicesDesc4:
      "Création d'interfaces intuitives et animées pour vos applications.",
    projectsTitle: "Mes projets",
    all: "Tout",
    AI: "IA",
    games: "Jeux",
    web: "Web",
    mobile: "Mobile",
    aboutTitle: "À propos de moi",
    aboutHeader:
      "Bonjour, je suis Nicolas Gauthier, un développeur passionné spécialisé dans la création d'applications web et mobiles modernes. J'adore résoudre des problèmes complexes et créer des solutions évolutives et conviviales.",
    skills: "Compétences",
    aboutFooter:
      "Lorsque je ne code pas, j'aime jouer à des jeux vidéo, explorer de nouvelles technologies et contribuer à des projets open-source. Je crois en l'apprentissage continu et m'efforce toujours d'améliorer mes compétences.",
    contactTitle: "Contactez-moi",
    contactHeader:
      "Je suis toujours ouvert à de nouvelles opportunités, collaborations ou simplement à une discussion amicale. N'hésitez pas à me contacter par email ou à vous connecter avec moi sur les réseaux sociaux.",
    name: "Nom",
    yourName: "Votre nom",
    yourEmail: "votre-email@exemple.com",
    yourMessage: "Votre message",
    sendMessage: "Envoyer",
    footer: "Tous droits réservés.",
    about: "À propos",
    projects: "Projets",
    home: "Accueil",
    downloadCv: "Télécharger CV",
  },
};

export const useTranslation = () => {
  const { language } = useLanguage();

  // Default to 'en' if the language is invalid or undefined
  const currentLanguage =
    language && ["en", "fr"].includes(language) ? language : "fr";

  return translations[currentLanguage];
};
