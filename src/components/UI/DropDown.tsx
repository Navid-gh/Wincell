import { useState } from "react";
import { cn } from "../../utils/lib/cn";
import Button from "./Button";
import AppsSort from "./icons/AppsSort";
import LeftArrow from "./icons/LeftArrow";
import { mainBorder, textBody1Bold, textBody2 } from "../../constants/styles";
import { FilterItem } from "../../constants/filterItems";

type Props<T> = {
  items: T[];
  keyToBePassed: keyof T;
  title: string;
  type: "primary" | "secondary";
  state: string | undefined;
  setState: (key: string) => void;
};

const DropDown = <T extends FilterItem>({
  items,
  keyToBePassed,
  title,
  type,
  setState,
  state,
}: Props<T>) => {

  const [show, setShow] = useState(false);

  return (
    <div className="flex-1 relative max-w-56">
      <Button
        intent={type}
        className="flex justify-between items-center py-3"
        size="base"
        onClick={() => setShow((prev) => !prev)}
      >
        <div className="flex items-center gap-2">
          <AppsSort
            className="w-4 h-4"
            fill={
              type == "secondary"
                ? "rgb(var(--primary-text-color))"
                : "rgb(var(--black-color)"
            }
          />
          <span className={textBody1Bold}>{title}</span>
        </div>
        <LeftArrow
          className={cn(
            "w-4 h-4 -rotate-90 transition-transform duration-300",
            show && "rotate-90",
            type == "secondary" && "dark:invert"
          )}
        />
      </Button>
      <ul
        className={cn(
          "absolute z-50 top-[110%] left-0 w-full bg-main-secondary-bg p-2 rounded-small transition duration-300 translate-y-3 opacity-0 pointer-events-none",
          show && "opacity-100 pointer-events-auto translate-y-0",
          mainBorder,
          textBody2
        )}
      >
        {items.map((item) => {
          const key = item[keyToBePassed];
          return (
            <li
              onClick={() => setState(key as string)}
              key={
                typeof key === "string" || typeof key === "number"
                  ? key
                  : undefined
              }
              className={cn(
                "p-2 cursor-pointer rounded-small transition duration-300 hover:bg-main-green-100 hover:dark:bg-main-gray-300",
                key === state &&
                "bg-main-green-300 hover:bg-main-green-300 dark:bg-main-gray-200 hover:dark:bg-main-gray-200"
              )}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
