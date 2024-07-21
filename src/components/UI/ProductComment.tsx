import { Link } from "react-router-dom";
import {
  bgProductPage,
  textBody2Bold,
  textBody3,
  textBody3Bold,
} from "../../constants/styles";
import { CommentProduct } from "../../types/apiTypes";
import { cn } from "../../utils/lib/cn";
import { toPersianDate } from "../../utils/toPersianDate";
import { toUrl } from "../../utils/toUrl";
import IconWrapper from "./IconWrapper";
import Book from "./icons/Book";
import User from "./icons/User";
import CommentStatus from "./CommentStatus";

type Props = {
  name: string;
  date: string;
  comment: string;
  status?: string;
  product?: CommentProduct;
};

const ProductComment = ({ comment, date, name, product, status }: Props) => {
  const link = status ? `/course/${product!._id}/${toUrl(product!.title)}` : "";
  return (
    <>
      {status ? (
        <li
          className={cn(
            "flex flex-col gap-2 pb-8 border-b border-main-secondary-text/30",
            textBody3
          )}
        >
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <Book className="dark:invert w-4 h-4" />
              <Link to={link}>
                <span className={textBody2Bold}>{product?.title}</span>
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <span
                className={cn("text-main-secondary-text/70", textBody3Bold)}
              >
                {toPersianDate(date, true)}
              </span>
              <CommentStatus status={status} />
            </div>
          </div>
          <p className={cn(bgProductPage)}>{comment}</p>
        </li>
      ) : (
        <li className={cn("flex flex-col gap-2", bgProductPage, textBody3)}>
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <IconWrapper
                className="bg-main-primary-bg w-10 h-10 cursor-auto"
                hasHoverEffect={false}
              >
                <User className="dark:invert" />
              </IconWrapper>
              <span className={textBody2Bold}>{name}</span>
            </div>
            <span className={cn("text-main-secondary-text/70", textBody3Bold)}>
              {toPersianDate(date, true)}
            </span>
          </div>
          <p>{comment}</p>
        </li>
      )}
    </>
  );
};

export default ProductComment;
