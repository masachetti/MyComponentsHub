import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import GithubLogoIcon from "@/assets/icons/GithubLogoIcon";
import BasePageBody from "@/components/BasePageBody";
import { useInfoPopUp } from "@/contexts/InfoPopUpProvider";
import { twJoin } from "tailwind-merge";
import ArrowBackIcon from "@/assets/icons/ArrowBackIcon";
import { useHubComponents } from "@/contexts/HubComponentsProvider";
import { useLanguage } from "@/contexts/LanguageProvider";

const ComponentPage = () => {
  const { componentHashName } = useParams();
  const { isPopUpOpen } = useInfoPopUp();
  const { language } = useLanguage();
  const { hubComponents } = useHubComponents();

  const component = useMemo(
    () => hubComponents.find((c) => "" + c.hashName === componentHashName),
    [componentHashName, hubComponents]
  );

  const [currentPreview, setCurrentPreview] = useState<JSX.Element>(() => {
    return component!.preview.length ? (
      component!.preview[0].previewComponent
    ) : (
      <></>
    );
  });
  return (
    <BasePageBody>
      <div
        className={twJoin(
          "w-full h-full flex flex-col items-center",
          isPopUpOpen ? "blur-sm" : ""
        )}
      >
        <Link to={"/"} className="absolute top-2 left-3 z-10">
          <ArrowBackIcon size={28}></ArrowBackIcon>
        </Link>
        <h1 className="text-2xl m-4">{component?.name}</h1>
        <p className="m-4">{component?.description}</p>
        <a
          className="flex gap-2 border rounded-lg px-2 py-1 input-primary input-focus"
          href={component?.githubURL}
          target="_blank"
        >
          <GithubLogoIcon />{" "}
          {language === "PT" ? "Código fonte" : "Source code"}
        </a>
        <div className="max-w-4/5 mt-6">
          <div className="flex w-full justify-center items-center">
            {component!.preview.map((preview) => (
              <button
                className="w-full text-center border rounded-t-md py-1.5 px-3 input-primary input-focus"
                key={preview.title}
                onClick={() => setCurrentPreview(preview.previewComponent)}
              >
                {preview.title}
              </button>
            ))}
          </div>
          <div className="w-full h-full border border-slate-950 dark:border-slate-600">
            {currentPreview}
          </div>
        </div>
      </div>
    </BasePageBody>
  );
};

export default ComponentPage;
