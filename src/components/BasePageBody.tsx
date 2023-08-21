import ToolButtons from "@/components/ToolButtons";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BasePageBodyProps extends PropsWithChildren {
  className?: string;
}

const BasePageBody: React.FC<BasePageBodyProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={twMerge(
        "bg-white text-slate-950 relative w-screen h-screen flex flex-col items-center dark:bg-gray-950 dark:text-white transition-colors",
        className
      )}
    >
      <ToolButtons className="absolute top-1 right-0 sm:right-4 z-10"></ToolButtons>
      {children}
    </div>
  );
};

export default BasePageBody;
