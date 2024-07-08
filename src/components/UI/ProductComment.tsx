import {
  bgProductPage,
  textBody2Bold,
  textBody3,
} from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { toPersianDate } from "../../utils/toPersianDate";
import IconWrapper from "./IconWrapper";
import User from "./icons/User";

type Props = {
  name: string;
  date: string;
  comment: string;
};

const ProductComment = ({ comment, date, name }: Props) => {
  return (
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
        <span>{toPersianDate(date, true)}</span>
      </div>
      <p>{comment}</p>
    </li>
  );
};

export default ProductComment;
