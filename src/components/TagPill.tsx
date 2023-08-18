import React, { MouseEvent, useCallback, useEffect, useRef } from "react";
import { Tag } from "@/types/tag";
import TAGS_COLORS from "@/constants/tags";
import { twJoin } from "tailwind-merge";
import CloseIcon from "@/assets/icons/CloseIcon";

interface TagPillProps {
  tag: Tag;
  className?: string;
  removable?: boolean;
  onClick?: (e: MouseEvent) => void;
  onRemove?: () => void;
}

const TagPill: React.FC<TagPillProps> = ({
  tag,
  className = "",
  onClick,
  removable = false,
}) => {
  const color = TAGS_COLORS[tag];
  const onClickHandler = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      onClick && onClick(e);
    },
    [onClick]
  );
  const ref = useRef<HTMLButtonElement>(null);

  const moveFocus = (parentElement: HTMLElement, currentIndex: number) => {
    if (parentElement) {
      if (parentElement.childNodes.length === 0) {
        parentElement.focus();
        return;
      }
      const nextFocusElement = Array.prototype.at.call(
        parentElement.childNodes,
        currentIndex + 1
      ) as HTMLElement;
      if (nextFocusElement) {
        nextFocusElement.focus();
      }
    }
  };

  useEffect(() => {
    const parentEl = ref.current?.parentElement;
    const index = Array.prototype.indexOf.call(parentEl, ref.current);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (parentEl && ref.current === null) {
        moveFocus(parentEl, index);
      }
    };
  }, []);

  return (
    <button
      ref={ref}
      style={{ backgroundColor: color }}
      className={twJoin(
        className,
        "rounded-2xl py-0.5 px-2 w-fit h-5 leading-none text-xs whitespace-nowrap font-semibold cursor-pointer relative flex justify-center items-center text-white",
        "hover:outline-1 hover:outline hover:outline-slate-800 hover:font-bold transition dark:hover:outline-slate-300",
        "input-focus",
        removable ? "pr-5" : ""
      )}
      onClick={onClickHandler}
    >
      <span className="-translate-y-px">{tag}</span>
      {removable && (
        <CloseIcon
          size={14}
          className="absolute right-1 top-1/2 -translate-y-1/2"
        />
      )}
    </button>
  );
};

export default TagPill;
