import clsx from "clsx";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type ComponentCardProps = PropsWithChildren<{
  component: HubComponentDataWithMetadata;
}>;

const ComponentCard = ({ component }: ComponentCardProps) => {
  const isNameTooLong = component.name.length > 16;
  return (
    <Link to={"" + component.hashName}>
      <div className="w-48 h-56 border-2 border-gray-600 rounded-lg py-2 px-6 flex flex-col gap-6 hover:scale-105 hover:border-gray-300">
        <div className="relative overflow-hidden">
          <h2
            className={clsx(
              "relative text-center whitespace-nowrap text-ellipsis overflow-hidden",
              isNameTooLong
                ? "hover:transition-all hover:duration-[5000ms] hover:ease-linear hover:w-fit hover:-translate-x-full"
                : ""
            )}
          >
            {component.name}
          </h2>
        </div>
        <div className="text-center">{component.description}</div>
      </div>
    </Link>
  );
};

export default ComponentCard;
