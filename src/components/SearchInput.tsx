import { InputHTMLAttributes, memo, useRef, useState } from "react";
import { cn } from "../utils/lib/cn";
import SearchIcon from "./UI/icons/Search";
import { mainBorder, textBody3, textPlaceholder } from "../constants/styles";
import useDebounceFunc from "../hooks/useDebounceFunc";
import { searchAll } from "../api";
import toast from "react-hot-toast";
import { Article, Course } from "../types/apiTypes";
import ImageWrapper from "./UI/ImageWrapper";
import { Link } from "react-router-dom";
import { toUrl } from "../utils/toUrl";

type Props = {
  className?: string;
  type: "sidebar" | "navbar" | "filter";
  placeHolder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = ({ className, type, placeHolder, ...rest }: Props) => {
  const [data, setData] = useState<(Course | Article)[]>([]);
  const queryRef = useRef<HTMLInputElement>(null);
  const handleSearch = async () => {
    if (queryRef.current) {
      const query = queryRef.current.value;
      try {
        const res = await searchAll(query);
        setData(Array.prototype.concat(res.blog, res.course));
      } catch (error) {
        console.log(error);
        toast.error("خطا در برقراری ارتباط");
      }
    }
  };
  const debouncedSearch = useDebounceFunc(handleSearch, 500);
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
        ref={queryRef}
        onChange={debouncedSearch}
      />
      <SearchIcon
        id="search-icon"
        className="w-4 h-4 absolute left-2 top-[50%] -translate-y-[50%] dark:invert"
      />
      {data && data.length > 0 && (
        <div
          role="list"
          className={cn(
            "absolute top-[110%] left-0 w-full bg-main-secondary-bg p-2 flex flex-col gap-2 shadow-box-shadow-1 border border-main-primary-text rounded-small",
            textBody3
          )}
        >
          {data.map((item) => {
            let link = `${item?._id}/${toUrl(item?.title)}`;
            link = ("level" in item ? "/course/" : "/article/") + link;
            return (
              <Link
                to={link}
                role="listitem"
                className="p-2 flex items-center gap-4 bg-main-primary-bg rounded-small shadow-box-shadow-3 border border-main-secondary-text/20 cursor-pointer transition hover:bg-main-primary-bg/50"
                key={item._id}
              >
                <ImageWrapper
                  className="w-8 h-8"
                  src={item.images[0]}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(SearchInput);
