import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { getCourses } from "../api/course";
import { getArticles } from "../api/article";
import WithLoaderAndError from "./WithLoaderAndError";
import Cards from "./UI/Cards";
import { cn } from "../utils/lib/cn";
import { bgTextColor, textTitle2 } from "../constants/styles";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

type Props = {
  title?: string;
  apiUrl: string;
  type: "course" | "article";
  linkUrl?: string;
};

const CardsWrapper = ({ apiUrl, title, type, linkUrl }: Props) => {
  let data: any = {};
  let isLoading: boolean = false;
  let isError: boolean = false;
  let error: Error | null = null;

  if (type === "course") {
    const courseQuery = useQuery({
      queryKey: [type, apiUrl],
      queryFn: getCourses,
    });
    data = courseQuery.data;
    isLoading = courseQuery.isLoading;
    isError = courseQuery.isError;
    error = courseQuery.error;
  } else if (type === "article") {
    const articleQuery = useQuery({
      queryKey: [type, apiUrl],
      queryFn: getArticles,
    });
    data = articleQuery.data;
    isLoading = articleQuery.isLoading;
    isError = articleQuery.isError;
    error = articleQuery.error;
  }
  return (
    <div className="flex flex-col gap-4">
      {title && <h2 className={cn("", textTitle2, bgTextColor)}>{title}</h2>}
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        {data && <Cards type={type} array={data} />}
      </WithLoaderAndError>
      {linkUrl && (
        <Link to={linkUrl} className="self-center">
          <Button intent="secondary" size="base" role="link" className="w-full">
            مشاهده همه
          </Button>
        </Link>
      )}
    </div>
  );
};

export default memo(CardsWrapper);
