import React, { PropsWithChildren, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}
const defaultValue: LanguageContextValue = {
  language: "EN",
  toggleLanguage: () => {},
};

const LanguageContext = React.createContext<LanguageContextValue>(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

const LanguageProvider: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const userLang = navigator.language;
  const [language, setLanguage] = useLocalStorage<Language>(
    "language",
    userLang.startsWith("pt") ? "PT" : "EN"
  );

  const toggleLanguage = () => {
    setLanguage((prevValue) => (prevValue === "PT" ? "EN" : "PT"));
  };
  const value: LanguageContextValue = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
