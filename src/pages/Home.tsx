import BasePageBody from "@/components/BasePageBody";
import ComponentCard from "@/components/ComponentCard";
import FilterBar from "@/components/FilterBar";
import { useFilter } from "@/contexts/FilterProvider";
import { useHubComponents } from "@/contexts/HubComponentsProvider";
import { useInfoPopUp } from "@/contexts/InfoPopUpProvider";
import { useMemo } from "react";
import { twJoin } from "tailwind-merge";

const Home = () => {
  const { search, selectedTags } = useFilter();
  const { isPopUpOpen } = useInfoPopUp();
  const { hubComponents } = useHubComponents();

  const componentsToRender = useMemo(
    () =>
      hubComponents.filter((component) => {
        const searchMatch =
          component.name.includes(search) ||
          component.description.includes(search);
        const tagsMatch = selectedTags.every((_tag) =>
          component.tags.includes(_tag)
        );
        return searchMatch && tagsMatch;
      }),
    [search, selectedTags, hubComponents]
  );

  return (
    <BasePageBody className="overflow-x-hidden">
      <FilterBar
        className={twJoin(isPopUpOpen ? "blur-sm" : "", "mt-10 md:mt-0")}
      ></FilterBar>
      <div
        className={twJoin(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",
          isPopUpOpen && "blur-sm"
        )}
      >
        {componentsToRender.map((component) => (
          <ComponentCard component={component} key={component.hashName} />
        ))}
      </div>
    </BasePageBody>
  );
};

export default Home;
