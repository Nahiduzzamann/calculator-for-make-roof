import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const [language, setLanguage] = useState(true);
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(!language)
  };

  return (
    <>
      {language ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLanguageChange("en")}>Translate to English</button>:<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleLanguageChange("bn")}>বাংলা কোরুন</button>} 
    </>
  );
};

export default LanguageToggle;
