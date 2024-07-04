import { textBody3Bold } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Star from "./icons/Star";

type Props = {
  rating: number;
  count: number;
};
const Rating = ({ count, rating }: Props) => {
  return (
    <div
      className={cn("flex items-center text-main-primary-text", textBody3Bold)}
    >
      <span className="ml-1">{` (${toPersianNumbers(count)})`}</span>
      <span>{toPersianNumbers(rating)}</span>
      <Star className="dark:invert mb-1" />
    </div>
  );
};

export default Rating;
