import React from "react";
import { twJoin } from "tailwind-merge";

interface LanguageSwitchButtonProps {
  onToggle?: () => void;
  currentLanguage: Language;
}

const LanguageSwitchButton = React.forwardRef<
  HTMLDivElement,
  LanguageSwitchButtonProps
>(({ onToggle, currentLanguage }, ref) => {
  const isPortuguese = currentLanguage === "PT";

  return (
    <div
      className="relative w-fit h-fit flex justify-center cursor-pointer group"
      onClick={onToggle}
      ref={ref}
    >
      <input
        className={twJoin(
          "input-primary input-focus",
          "h-5 w-14 appearance-none cursor-pointer rounded-2xl border bg-transparent"
        )}
        checked={isPortuguese}
        onChange={() => {}}
        type="checkbox"
        role="switch"
        id="languageSwitchButton"
      />
      <div
        className={twJoin(
          "absolute w-full h-full transition-all -top-[2px] duration-300 ease-in-out pointer-events-none",
          isPortuguese
            ? "-translate-x-[2px]"
            : "translate-x-[calc(100%+2px)] w-fit"
        )}
      >
        <div
          className={twJoin(
            "absolute w-[24px] h-[24px] rounded-full bg-cover bg-center z-[2] ",
            isPortuguese ? "" : "-translate-x-full"
          )}
          style={{
            transition: "inherit",
            backgroundImage: isPortuguese
              ? "url('img/brasil.png')"
              : "url('img/england.jpg')",
          }}
        ></div>
      </div>
      <div
        className={twJoin(
          "absolute top-1/2 -translate-y-1/2 leading-none text-center right-3 transition-opacity duration-300 ease-out text-xs font-semibold pointer-events-none",
          isPortuguese ? "ease-in" : "opacity-0"
        )}
      >
        PT
      </div>
      <div
        className={twJoin(
          "absolute top-1/2 -translate-y-1/2 leading-none text-center left-3 transition-opacity duration-300 ease-out text-xs font-semibold pointer-events-none",
          isPortuguese ? "opacity-0" : "ease-in"
        )}
      >
        EN
      </div>

      <label className="sr-only" htmlFor="languageSwitchButton">
        Language switch button
      </label>
    </div>
  );
});

export default LanguageSwitchButton;
