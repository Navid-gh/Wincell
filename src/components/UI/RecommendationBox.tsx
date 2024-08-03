import { Article } from "../../types/apiTypes";
import { cn } from "../../utils/lib/cn";
import { bgProductPage, textBody2 } from "../../constants/styles";
import ImageWrapper from "./ImageWrapper";
import { Link } from "react-router-dom";
import { toUrl } from "../../utils/toUrl";

type Props = {
  title: string;
  data: Article[];
};

const RecommendationBox = ({ data, title }: Props) => {
  return (
    <div className={cn("flex flex-col", bgProductPage, textBody2)}>
      <h2 className="py-2 border-b border-b-main-secondary-text/20">{title}</h2>
      <div className="flex flex-col gap-1" role="list">
        {data.map(({ images, _id, title }) => {
          const link = `/article/${_id}/${toUrl(title)}`;
          return (
            <Link
              to={link}
              role="listitem"
              className="p-1 flex items-center flex-wrap break-all gap-2 transition-[background-color] hover:bg-main-green-100 cursor-pointer border-b border-b-main-secondary-text/20"
              key={_id}
            >
              <ImageWrapper
                className="w-12 h-10"
                src={images[0]}
                alt={title + "عکس "}
              />
              <h3>{title}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationBox;
