import { memo } from "react";
import { textBody1, textTitle3 } from "../../constants/styles";
import { CourseDetailsBox } from "../../types/courseDetailsBoxType";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Button from "./Button";
import ImageWrapper from "./ImageWrapper";

type Props = {
  image: string;
  detailsList: CourseDetailsBox[];
  id: string;
  price: string | number;
};
const ProductDetailsBox = ({ detailsList, id, image, price }: Props) => {
  return (
    <aside className="sticky top-2 course-sidebar:static flex flex-col gap-4 basis-[22rem] max-w-[22rem] bg-main-secondary-bg p-4 rounded-big shadow-box-shadow-3 self-start">
      <ImageWrapper
        src={image}
        alt="عکس دوره سایت وینسل"
        className="max-h-[12rem]"
      />
      <ul className="flex flex-col gap-2">
        {detailsList.map((item) => (
          <li
            className="flex items-center gap-2 border-b border-main-secondary-text/20 pb-1"
            key={item.id}
          >
            <item.Icon className="w-4 h-4 dark:invert" />
            <span className={textBody1}>{item.value}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between gap-2">
        <span className={textBody1}>قیمت دوره:</span>
        <span className={textTitle3}>
          {toPersianNumbers(price, true)} تومان
        </span>
      </div>
      <Button intent="primary" size="base" className="h-auto py-4">
        افزودن به سبد خرید
      </Button>
    </aside>
  );
};

export default memo(ProductDetailsBox);
