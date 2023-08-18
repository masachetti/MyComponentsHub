import InfoIcon from "@/assets/icons/InfoIcon";
import MoonIcon from "@/assets/icons/MoonIcon";
import SunnyIcon from "@/assets/icons/SunnyIcon";
import InfoView from "@/components/InfoView";
import LanguageSwitchButton from "@/components/LanguageSwitchButton";
import { useInfoPopUp } from "@/contexts/InfoPopUpProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useDarkMode } from "usehooks-ts";
import { AnimatePresence } from "framer-motion";

const ToolButtons = ({ className = "" }) => {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  const { language, toggleLanguage } = useLanguage();

  const { isPopUpOpen, togglePopUp } = useInfoPopUp();

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={twMerge(
        "gap-3 flex justify-center items-center p-2",
        className
      )}
      ref={containerRef}
    >
      <button
        onClick={toggleDarkMode}
        className="input-primary input-focus rounded-md p-px dark:hover:ring-1 dark:hover:ring-slate-300"
      >
        {isDarkMode ? <SunnyIcon size={24} /> : <MoonIcon size={24} />}
      </button>
      <LanguageSwitchButton
        currentLanguage={language}
        onToggle={toggleLanguage}
      ></LanguageSwitchButton>
      <button
        onClick={togglePopUp}
        className="input-primary input-focus rounded-md p-px dark:hover:ring-1 dark:hover:ring-slate-300"
      >
        <InfoIcon size={24} />
      </button>
      <AnimatePresence>
        {isPopUpOpen && <InfoView containerRef={containerRef}></InfoView>}
      </AnimatePresence>
    </div>
  );
};

export default ToolButtons;
