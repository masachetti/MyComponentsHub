import { Tags } from "./tag";
interface HubComponent {
  name: LocatedString;
  description: LocatedString;
  tags: Tags;
  referenceLink?: string;
  imageOrGifPath?: string;
  preview: Array<HubComponentPreview>;
}

interface HubComponentPreview {
  title: LocatedString;
  previewComponent: JSX.Element;
}

type HubComponentWithURLs = HubComponent & {
  hashName: number;
  githubURL: string;
};

type ReplaceType<T, V, K extends keyof T> = Omit<T, K> & { [Key in K]: V };

type LocatedHubComponentWithURLs = ReplaceType<
  ReplaceType<HubComponentWithURLs, string, "name" | "description">,
  Array<ReplaceType<HubComponentPreview, string, "title">>,
  "preview"
>;
