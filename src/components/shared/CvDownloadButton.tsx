// src/components/shared/CVDownloadButton.tsx
"use client"; // Make sure this is a client-side component

import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/theme/LanguageProvider";
import CV from "../../../public/assets/NicolasGauthier_DEV.pdf";
import CV_fr from "../../../public/assets/NicolasGauthier_DEV_fr.pdf";

const CVDownloadButton = () => {
  const { language } = useLanguage();
  console.log(language);
  const downloadCV = () => {
    // Update the path with the location of your CV file
    const cvUrl = language === "en" ? CV : CV_fr;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Nicolas_Gauthier_CV.pdf"; // Set the filename for the downloaded file
    link.click();
  };
  const translations = useTranslation();
  return (
    <Button
      onClick={downloadCV}
      className="fixed bottom-5 right-5 flex items-center justify-center gap-2 bg-accent text-primary py-3 px-5 rounded-lg shadow-lg hover:bg-accent-dark transition-colors duration-300"
    >
      <span>{translations.downloadCv}</span>
    </Button>
  );
};

export default CVDownloadButton;
