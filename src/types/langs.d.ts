type Language = "PT" | "EN";

type LocatedString =
  | string
  | {
      [key in Language]: string;
    };
