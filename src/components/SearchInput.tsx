import { InputHTMLAttributes, memo } from "react";
import { cn } from "../utils/lib/cn";
import SearchIcon from "./UI/icons/Search";
import { mainBorder, textPlaceholder } from "../constants/styles";

type Props = {
  className?: string;
  type: "sidebar" | "navbar" | "filter";
  placeHolder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({ className, type, placeHolder, ...rest }: Props) => {
  return (
    <div className="flex flex-col w-full gap-2 relative h-full">
      <input
        className={cn(
          "bg-transparent text-main-primary-text h-full py-1 px-6 rounded-small",
          mainBorder,
          textPlaceholder,
          className
        )}
        placeholder={placeHolder}
        {...rest}
      />
      <SearchIcon
        id="search-icon"
        className="w-4 h-4 absolute left-2 top-[50%] -translate-y-[50%] dark:invert"
      />
    </div>
  );
};

export default memo(SearchInput);
