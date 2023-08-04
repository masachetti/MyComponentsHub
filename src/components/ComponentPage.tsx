import { useParams } from "react-router-dom";
import componentsList from "@/utils/componentsList";
import { useMemo, useState } from "react";
import clsx from "clsx";
import GithubLogoIcon from "@/assets/icons/GithubLogoIcon";

const ComponentPage = () => {
  const { componentHashName } = useParams();
  const component = useMemo(
    () => componentsList.find((c) => "" + c.hashName === componentHashName),
    [componentHashName]
  );

  const [currentPreview, setCurrentPreview] = useState(() => {
    const previewComponents = Object.values(component!.preview);
    return previewComponents.length ? previewComponents[0] : <></>;
  });
  return (
    <div className="bg-gray-950 text-white w-screen h-screen px-4 flex flex-col items-center">
      <h1 className="text-2xl m-4">{component?.name}</h1>
      <p className="m-4">{component?.description}</p>
      <a
        className="flex gap-2 border rounded-lg px-2 py-1 hover:bg-gray-800"
        href={component?.githubURL}
      >
        <GithubLogoIcon /> Source code
      </a>
      <div className="flex mt-6 w-full justify-center items-center cursor-pointer">
        {Object.entries(component!.preview).map(
          ([previewName, previewComponent]) => (
            <div
              className={clsx(
                "w-full text-center border border-gray-600 rounded-t-md py-1.5",
                "hover:bg-gray-700 hover:transition hover:duration-75"
              )}
              key={previewName}
              onClick={() => setCurrentPreview(previewComponent)}
            >
              {previewName}
            </div>
          )
        )}
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {currentPreview}
      </div>
    </div>
  );
};

export default ComponentPage;
