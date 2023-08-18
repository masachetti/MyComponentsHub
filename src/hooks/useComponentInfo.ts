import { HubComponentDataWithMetadata } from "@/types/componentHub";
import { getStringFromLocatedString } from "@/utils/getStringFromLocatedString";
import { useMemo } from "react";

export default function useComponentInfo(
  component: HubComponentDataWithMetadata,
  language: Language
) {
  const name = useMemo(
    () =>
      getStringFromLocatedString(component.name, language, `Component Name`),
    [component, language]
  );

  const description = useMemo(
    () =>
      getStringFromLocatedString(
        component.description,
        language,
        `Component Description`
      ),
    [component, language]
  );

  return { name, description };
}
