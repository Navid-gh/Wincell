import { HtmlHTMLAttributes, memo } from "react";
import { cn } from "../../utils/lib/cn";
import { hoverShadowEffect, mainBorder } from "../../constants/styles";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  hasHoverEffect?: boolean;
};

const IconWrapper = ({ className, hasHoverEffect, ...rest }: Props) => {
  hasHoverEffect = hasHoverEffect == undefined ? true : hasHoverEffect;
  return (
    <div
      className={cn(
        "flex items-center justify-center p-2 bg-pink cursor-pointer rounded-small w-full h-full max-w-fit",
        hasHoverEffect && hoverShadowEffect,
        mainBorder,
        className
      )}
      {...rest}
    ></div>
  );
};

export default memo(IconWrapper);
