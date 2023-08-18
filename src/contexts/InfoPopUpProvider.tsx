import React, { PropsWithChildren, useContext } from "react";
import { useLocalStorage } from "usehooks-ts";

interface InfoPopUpContextValue {
  isPopUpOpen: boolean;
  togglePopUp: () => void;
}
const defaultValue: InfoPopUpContextValue = {
  isPopUpOpen: false,
  togglePopUp: () => {},
};

const InfoPopUpContext =
  React.createContext<InfoPopUpContextValue>(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useInfoPopUp = () => useContext(InfoPopUpContext);

const InfoPopUpProvider: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const [isPopUpOpen, setIsPopUpOpen] = useLocalStorage("info-view-open", true);

  const togglePopUp = () => {
    setIsPopUpOpen((prev) => !prev);
  };
  const value: InfoPopUpContextValue = {
    isPopUpOpen,
    togglePopUp,
  };

  return (
    <InfoPopUpContext.Provider value={value}>
      {children}
    </InfoPopUpContext.Provider>
  );
};

export default InfoPopUpProvider;
