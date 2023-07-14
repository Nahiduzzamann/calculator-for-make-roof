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
    <div className="bg-blue-500 w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {language ? <button onClick={() => handleLanguageChange("en")}>Translate English</button>:<button onClick={() => handleLanguageChange("bn")}>বাংলা কোরুন</button>} 
    </div>
  );
};

export default LanguageToggle;
