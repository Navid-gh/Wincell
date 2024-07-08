import {
  leftTriangle,
  mainBorder,
  textBody3,
  textTitle4,
} from "../../constants/styles";
import { Course } from "../../types/apiTypes";
import { cn } from "../../utils/lib/cn";
import { toPersianDate } from "../../utils/toPersianDate";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Button from "./Button";
import IconWrapper from "./IconWrapper";
import Basket from "./icons/Basket";
import Heart from "./icons/Heart";

type Props = {
  data: Course;
  className?: string;
};

const ProductHoverCard = ({ data, className }: Props) => {
  return (
    <div
      className={cn(
        "opacity-0 pointer-events-none translate-y-10 min-h-[20rem] transition z-20 bg-main-secondary-bg flex flex-col gap-4 p-4 rounded-small absolute top-1/2 left-1/2 -translate-x-1/2",
        mainBorder,
        className
      )}
    >
      <div className="flex flex-col items-start gap-2">
        <span className={cn("", textTitle4)}>{data?.title}</span>
        <ul
          className={cn(
            "border-b border-main-primary-text/50 pb-2 text-main-secondary-text/70",
            textBody3
          )}
        >
          <li className={cn("flex items-center gap-2", leftTriangle)} key={1}>
            <span>آخرین به روز رسانی</span>
            <span>|</span>
            <span>{toPersianDate(data?.lastUpdate, true)}</span>
          </li>
          <li className={cn("flex items-center gap-2", leftTriangle)} key={2}>
            <span>مدت زمان</span>
            <span>|</span>
            <span>{`${toPersianNumbers(
              data?.neededTime?.hour
            )} ساعت و ${toPersianNumbers(
              data?.neededTime?.minute
            )} دقیقه`}</span>
          </li>
          <li className={cn("flex items-center gap-2", leftTriangle)} key={3}>
            <span>سطح مورد نیاز</span>
            <span>|</span>
            <span>{data?.grade}</span>
          </li>
        </ul>
      </div>
      <p className={cn("self-start", textBody3)}>{data?.shortText}</p>
      <div className="flex gap-2 items-center mt-auto">
        <IconWrapper>
          <Heart className="w-5 h-5" />
        </IconWrapper>
        <Button
          intent="tertiary"
          size="base"
          className="flex items-center justify-center"
        >
          <div className="flex items-center justify-center gap-1 w-4/5">
            <Basket className="w-4 h-4" isGreen />
            <span>سبد خرید</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductHoverCard;
