interface HubComponentData {
  name: string;
  description: string;
  tags: Array<string>;
  preview: {
    [key: string]: JSX.Element;
  };
}

type HubComponentDataWithMetadata = HubComponentData & {
  hashName: number;
  githubURL: string;
};

interface ImportedComponents {
  [key: string]: HubComponentData;
}
