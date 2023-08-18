import { Tag } from "@/types/tag";
import React, { PropsWithChildren, useContext, useState } from "react";

interface FilterContextValue {
  addTag: (tag: Tag) => void;
  removeTag: (tag: Tag) => void;
  setSearch: (search: string) => void;
  search: string;
  selectedTags: Array<Tag>;
}
const defaultValue: FilterContextValue = {
  addTag: () => {},
  removeTag: () => {},
  setSearch: () => {},
  search: "",
  selectedTags: [],
};

const FilterContext = React.createContext<FilterContextValue>(defaultValue);

// eslint-disable-next-line react-refresh/only-export-components
export const useFilter = () => useContext(FilterContext);

const FilterProvider: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<Array<Tag>>([]);

  const addTag = (tag: Tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
  };

  const removeTag = (tag: Tag) => {
    setSelectedTags((prevTags) => prevTags.filter((_tag) => _tag != tag));
  };

  const value: FilterContextValue = {
    addTag,
    removeTag,
    setSearch,
    search,
    selectedTags,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
