import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import WithLoaderAndError from "./WithLoaderAndError";
import Cards from "./UI/Cards";
import { cn } from "../utils/lib/cn";
import { bgTextColor, textTitle2 } from "../constants/styles";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

type Props = {
  title?: string;
  type: "course" | "article";
  linkUrl?: string;
  getterFunc: () => Promise<any>;
};

const CardsWrapper = ({ title, type, linkUrl, getterFunc }: Props) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [type + " " + getterFunc],
    queryFn: getterFunc,
  });
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
