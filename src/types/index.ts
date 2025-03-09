import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  desc: string;
  icons: React.ReactNode[];
  languages: string[];
  demo?: string;
  github?: string;
  category: string;
  screenShots: StaticImageData[];
  icon: React.ReactNode;
};
