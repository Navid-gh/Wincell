import { memo } from "react";
import { cn } from "../../utils/lib/cn";
import { mainBorder } from "../../constants/styles";

type Props = {
  src: string;
  alt: string;
  className?: string;
  tagContent?: JSX.Element;
};

const ImageWrapper = ({ src, alt, className, tagContent }: Props) => {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-[16px] overflow-hidden",
        mainBorder,
        className
      )}
    >
      <img
        className="w-full h-full"
        src={src}
        alt={`${alt} عکس`}
        loading="lazy"
      />
      {tagContent}
    </div>
  );
};

export default memo(ImageWrapper);
