import {
  bgTextColor,
  textBody2,
  textTitle2,
  textTitle3,
} from "../../constants/styles";
import { imageSlide } from "../../types/apiTypes";
import { cn } from "../../utils/lib/cn";
import Button from "./Button";
import { Link } from "react-router-dom";

const ImageSlide = ({ description, image, title, subTitle }: imageSlide) => {
  return (
    <div className="relative w-full h-[22.875rem] flex flex-col items-start justify-center">
      <div className="flex flex-col items-center pr-24 gap-2 sidebar:pr-12 mobile:pr-4">
        <h2 className={cn("", textTitle2, bgTextColor)}>{title}</h2>
        <h3
          className={cn(
            "text-main-primary-bg bg-main-primary-text rounded-small",
            textTitle3
          )}
        >
          {subTitle}
        </h3>
        <p className={cn("", textBody2)}>{description}</p>
        <Link to="/about" className="h-10">
          <Button intent="primary" size="base" role="link">
            اطلاعات بیشتر
          </Button>
        </Link>
      </div>
      <div
        className="-z-10 absolute top-0 left-0 w-full h-full max-w-full max-h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(" + image + ")" }}
      />
    </div>
  );
};

export default ImageSlide;
