import AddTagButton from "@/components/AddTagButton";
import SearchInput from "@/components/SearchInput";
import TagPill from "@/components/TagPill";
import { useFilter } from "@/contexts/FilterProvider";
import { useLanguage } from "@/contexts/LanguageProvider";
import { twMerge } from "tailwind-merge";

const FilterBar = ({ className = "" }) => {
  const { search, setSearch, removeTag, addTag, selectedTags } = useFilter();
  const { language } = useLanguage();

  return (
    <div
      className={twMerge(
        "w-full h-auto mb-2 flex flex-col justify-center items-center relative",
        className
      )}
    >
      <SearchInput
        className="w-96 col-span-9 placeholder:text-center"
        value={search}
        onChange={setSearch}
        placeholder={
          language === "PT"
            ? "Pesquise pelo nome ou descrição do componente"
            : "Search by component name or description"
        }
      />
      <div className="mb-3 flex flex-wrap justify-center items-center gap-2 max-w-sm">
        {selectedTags.map((tag) => (
          <TagPill
            tag={tag}
            key={tag}
            removable
            onClick={() => removeTag(tag)}
          ></TagPill>
        ))}
        <AddTagButton onSelectTag={addTag}></AddTagButton>
      </div>
    </div>
  );
};

export default FilterBar;
