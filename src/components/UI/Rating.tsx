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
      <span className="ml-1">{` (${toPersianNumbers(count ?? 0)})`}</span>
      <span>{toPersianNumbers(rating ?? 0)}</span>
      <Star className="dark:invert mb-1" />
    </div>
  );
};

export default Rating;
