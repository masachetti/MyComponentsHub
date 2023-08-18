import CloseIcon from "@/assets/icons/CloseIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { twMerge } from "tailwind-merge";

interface SearchInputProps {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={twMerge("relative h-fit group my-3", className)}>
      <label className="sr-only" htmlFor="search-bar">
        Search
      </label>
      <input
        id="search-bar"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-2xl w-full px-6 py-1 text-sm border bg-transparent border-slate-950 hover:border-slate-500 dark:border-slate-600 dark:hover:border-slate-500 placeholder:italic input-focus input-primary"
      />
      <SearchIcon
        className="absolute left-1.5 top-1/2 -translate-y-1/2 group-hover:text-slate-500 group-focus:text-slate-300 dark:text-slate-400 dark:group-hover:text-slate-200 dark:group-focus:text-slate-200"
        size={16}
      />
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 font-semibold group-hover:text-slate-500 group-focus:text-slate-300 dark:text-slate-400 dark:group-hover:text-slate-200 dark:group-focus:text-slate-200 input-focus rounded-lg"
        onClick={() => onChange("")}
      >
        <CloseIcon size={16} />
      </button>
    </div>
  );
};

export default SearchInput;
