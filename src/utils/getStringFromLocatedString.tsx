export function getStringFromLocatedString(
  locatedString: LocatedString | undefined,
  lang: Language,
  defaultString: string
): string {
  if (locatedString === undefined) return defaultString;
  if (typeof locatedString === "string") return locatedString;

  return locatedString[lang];
}
