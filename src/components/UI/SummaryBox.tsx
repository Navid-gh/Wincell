import { Link } from "react-router-dom";
import { cn } from "../../utils/lib/cn";
import {
  bgTextColor,
  hoverShadowEffect,
  mainBorder,
  textTitle4,
} from "../../constants/styles";

type Props = {
  IconComp: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  url: string;
  description?: string;
};

const SummaryBox = ({ IconComp, title, url }: Props) => {
  return (
    <Link
      to={url}
      className={cn(
        "flex-1 flex flex-col gap-4 min-w-[15.625rem] max-w-[15.625rem] items-center p-8 rounded-big",
        mainBorder,
        hoverShadowEffect
      )}
    >
      <div className="w-24 h-24">
        <IconComp />
      </div>
      <h2 className={cn("", textTitle4, bgTextColor)}>{title}</h2>
    </Link>
  );
};

export default SummaryBox;
