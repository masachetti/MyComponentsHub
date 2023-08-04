import componentsPaths from "@/hub_components";
import hashString from "@/utils/hashString";

const componentsList: Array<HubComponentDataWithMetadata> = await Promise.all(
  Object.entries(componentsPaths).map(([componentName, folderName]) =>
    import(`@/hub_components/${folderName}/index.tsx`).then((_i) => ({
      ..._i.default,
      hashName: hashString(componentName),
      githubURL: `${
        import.meta.env.VITE_GITHUB_URL
      }tree/master/src/hub_components/${folderName}`,
    }))
  )
);

console.log(componentsList);
export default componentsList;
