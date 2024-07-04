import { Link } from "react-router-dom";
import { Course } from "../../types/apiTypes";
import { toUrl } from "../../utils/toUrl";
import ImageWrapper from "./ImageWrapper";
import Rating from "./Rating";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import DiscountBg from "./icons/DiscountBg";
import ProductHoverCard from "./ProductHoverCard";
import { cn } from "../../utils/lib/cn";
import { bgTextColor, textBody3, textBody3Bold } from "../../constants/styles";

type Props = {
  data: Course;
};

const ProductCard = ({ data }: Props) => {
  const link = `/course/${data?.id}/${toUrl(data?.title)}`;
  const hasDiscount = data?.discount > 0;
  const ImageTagContent = (
    <ImageWrapper
      className="absolute right-1 bottom-2 w-20 h-10 rounded-[12px]"
      src={data?.owner?.image}
      alt={data?.owner?.name}
    />
  );
  return (
    <Link
      to={link}
      className="group relative flex-1 flex flex-col gap-4 p-4 rounded-big bg-main-secondary-bg max-w-[18rem] min-w-[17.5rem] mobile:min-w-[16rem] shadow-box-shadow-3"
      role="link"
    >
      <ImageWrapper
        src={data?.image}
        className="flex-[60%] max-h-[11rem] min-h-[11rem]"
        alt={data?.title}
        tagContent={ImageTagContent}
      />
      <div
        className={cn(
          "flex flex-col items-start text-main-secondary-text/70",
          textBody3
        )}
      >
        <div className="flex justify-between w-full">
          <h3 className={cn("text-main-primary-text", textBody3Bold)}>
            {data?.title}
          </h3>
          <Rating rating={data?.rating?.rate} count={data?.rating?.count} />
        </div>
        <span>{data?.owner?.name}</span>
        <div className="flex items-center gap-2">
          <span>قیمت دوره:</span>
          {hasDiscount ? (
            <>
              <span className="line-through">
                {toPersianNumbers(data?.price, true)} تومان
              </span>
              <span className={cn("", bgTextColor)}>
                {toPersianNumbers(data?.priceAfterDiscount, true)} تومان
              </span>
            </>
          ) : (
            <span>{toPersianNumbers(data?.price, true)} تومان</span>
          )}
        </div>
      </div>
      {hasDiscount && (
        <div className="flex items-center justify-center z-10 w-12 h-12 absolute right-full bottom-full translate-x-full translate-y-full">
          <span className={cn("text-main-primary-bg z-10", textBody3Bold)}>
            {toPersianNumbers(data?.discount)}%
          </span>
          <DiscountBg className="dark:invert absolute top-0 left-0" />
        </div>
      )}
      <ProductHoverCard
        data={data}
        className="group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 w-full"
      />
    </Link>
  );
};

export default ProductCard;
