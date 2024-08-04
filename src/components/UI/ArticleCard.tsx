import { Link } from "react-router-dom";
import { Article } from "../../types/apiTypes";
import { toUrl } from "../../utils/toUrl";
import ImageWrapper from "./ImageWrapper";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { toPersianDate } from "../../utils/toPersianDate";
import UserProfile from "./UserProfile";
import { cn } from "../../utils/lib/cn";
import {
  textBody1Bold,
  textBody2,
  textBody3,
  textBody3Bold,
  textTitle4,
} from "../../constants/styles";
import FilledHeart from "./icons/FilledHeart";
import Eye from "./icons/Eye";
import CategoryText from "./CategoryText";

type Props = {
  data: Article;
};

const ArticleCard = ({ data }: Props) => {
  const link = `/article/${data?._id}/${toUrl(data?.title)}`;
  const ImageTagContent = (
    <div
      className={cn(
        "absolute right-1 bottom-1 flex gap-1 items-center",
        textBody3
      )}
    >
      <div className="flex items-center bg-main-gray-400 text-main-white p-1 px-4 rounded-small gap-1">
        <FilledHeart className="w-4 h-4" fill="#fff" />
        <span>{toPersianNumbers(data?.numberLike, true)}</span>
      </div>
      <div className="flex items-center bg-main-gray-400 text-main-white p-1 px-4 rounded-small gap-1">
        <Eye className="w-4 h-4" fill="#fff" />
        <span>{toPersianNumbers(data?.view, true)}</span>
      </div>
    </div>
  );
  return (
    <Link
      to={link}
      className="flex-1 flex gap-4 p-4 bg-main-secondary-bg rounded-big shadow-box-shadow-3 article:flex-col article:gap-2"
      role="listitem"
    >
      <ImageWrapper
        src={data?.images[0]}
        alt={data?.title}
        tagContent={ImageTagContent}
        className="max-w-72 max-h-48 article:self-center article:max-w-full"
      />
      <article className="flex flex-col gap-2 w-full">
        <div className="flex justify-between mobile:flex-col mobile:gap-2">
          <h2 className={cn("mobile:self-start", textTitle4)}>{data?.title}</h2>
          <span className={cn("mobile:self-end", textBody3Bold)}>
            {toPersianDate(data?.createdAt)}
          </span>
        </div>
        <div className={cn("flex items-center gap-1", textBody3Bold)}>
          <UserProfile image={data?.author?.image} />
          <span>{data?.author?.name}</span>
        </div>
        <p className={cn("self-start", textBody2)}>{data?.shortText}</p>
        <div className="flex justify-between items-center mt-auto flex-wrap gap-2">
          <CategoryText>{data?.category[0]}</CategoryText>
          <span className={cn(textBody1Bold)}>مشاهده مطلب</span>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
