import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { LocatedHubComponentWithURLs } from "@/types/componentHub";
import TagPill from "./TagPill";
import { useFilter } from "@/contexts/FilterProvider";
import { twJoin } from "tailwind-merge";

type ComponentCardProps = PropsWithChildren<{
  component: LocatedHubComponentWithURLs;
}>;

const ComponentCard = ({ component }: ComponentCardProps) => {
  const { addTag } = useFilter();
  return (
    <Link to={"" + component.hashName}>
      <div
        className={twJoin(
          "w-56 border rounded-lg border-slate-600 transition-all duration-150 ease-in-out relative",
          "hover:shadow-xl hover:border-slate-950 hover:-translate-y-1",
          "dark:border-slate-600 dark:hover:border-slate-300"
        )}
      >
        <img
          src={component.imageOrGifPath}
          className="rounded-t-lg rounded-b-sm"
        ></img>
        <div className="py-2 px-6 flex flex-col gap-6 my-3">
          <h2 className="relative text-center">{component.name}</h2>
          <div className="flex flex-wrap gap-1 justify-center">
            {component.tags.map((tag) => (
              <TagPill tag={tag} key={tag} onClick={() => addTag(tag)} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ComponentCard;
