import { useLanguage } from "@/contexts/LanguageProvider";
import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import componentsList from "@/utils/componentsList";
import {
  HubComponentWithURLs,
  LocatedHubComponentWithURLs,
} from "@/types/componentHub";
import { getStringFromLocatedString } from "@/utils/getStringFromLocatedString";

interface HubComponentsContextValue {
  hubComponents: Array<LocatedHubComponentWithURLs>;
}
const defaultValue: HubComponentsContextValue = {
  hubComponents: [],
};

const HubComponentsContext =
  React.createContext<HubComponentsContextValue>(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useHubComponents = () => useContext(HubComponentsContext);

const HubComponentsProvider: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const { language } = useLanguage();
  const [components, setComponents] = useState<Array<HubComponentWithURLs>>([]);

  useEffect(() => {
    componentsList().then((retComponents) => setComponents(retComponents));
  }, []);

  const hubComponents = useMemo<Array<LocatedHubComponentWithURLs>>(
    () =>
      components.map((component) => ({
        ...component,
        name: getStringFromLocatedString(
          component.name,
          language,
          `Component Name`
        ),
        description: getStringFromLocatedString(
          component.description,
          language,
          `Component Description`
        ),
        preview: component.preview.map((cPreview, index) => ({
          ...cPreview,
          title: getStringFromLocatedString(
            cPreview.title,
            language,
            `Preview ${index + 1}`
          ),
        })),
      })),
    [language, components]
  );

  const value: HubComponentsContextValue = {
    hubComponents,
  };

  return (
    <HubComponentsContext.Provider value={value}>
      {children}
    </HubComponentsContext.Provider>
  );
};

export default HubComponentsProvider;
