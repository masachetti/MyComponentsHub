import { useMemo, useRef, useState } from "react";
import TAGS from "@/constants/tags";
import TagPill from "@/components/TagPill";
import { Tag } from "@/types/tag";
import { useFilter } from "@/contexts/FilterProvider";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import SearchInput from "@/components/SearchInput";
import { useLanguage } from "@/contexts/LanguageProvider";
import { twJoin } from "tailwind-merge";

interface AddTagButtonProps {
  onSelectTag?: (tag: Tag) => void;
}

const AddTagButton: React.FC<AddTagButtonProps> = ({ onSelectTag }) => {
  const { selectedTags } = useFilter();
  const [tagSearch, setTagSearch] = useState("");
  const { language } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const documentRef = useRef<Document>(document);

  const closeWhenLoseFocus = (e: Event) => {
    if (!ref.current!.contains(e.target as Node)) {
      setIsDropdownOpen(false);
    }
  };
  useEventListener("focusin", closeWhenLoseFocus, documentRef);

  const handleClickOutside = () => setIsDropdownOpen(false);
  useOnClickOutside(ref, handleClickOutside);

  const filteredTags = useMemo(() => {
    const tagList = Object.keys(TAGS) as Array<Tag>;
    return tagList.filter(
      (_tag) => _tag.includes(tagSearch) && !selectedTags.includes(_tag)
    );
  }, [tagSearch, selectedTags]);

  const tagClickedHandler = (tag: Tag) => {
    onSelectTag && onSelectTag(tag);
  };
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="rounded-2xl py-0.5 px-4 w-fit text-xs font-semibold border input-primary input-focus"
      >
        {language === "PT" ? "Adicionar Tag +" : "Add tag +"}
      </button>
      <div
        className={twJoin(
          "absolute w-fit min-w-max  p-2 z-10 border rounded-md translate-y-1 left-1/2 -translate-x-1/2 flex flex-col gap-1.5",
          "bg-white border-slate-950 dark:bg-slate-800 dark:border-slate-400",
          isDropdownOpen ? "" : "hidden"
        )}
      >
        <SearchInput
          className="w-48"
          value={tagSearch}
          onChange={setTagSearch}
          placeholder={
            language === "PT" ? "Pesquise por uma Tag" : "Search for a tag"
          }
        ></SearchInput>
        <div className="p-1 flex flex-col gap-1.5 w-auto max-h-40 overflow-y-auto">
          {filteredTags.map((tag) => (
            <TagPill
              tag={tag}
              key={`add-${tag}`}
              onClick={() => tagClickedHandler(tag)}
              className="mr-2"
            ></TagPill>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddTagButton;
