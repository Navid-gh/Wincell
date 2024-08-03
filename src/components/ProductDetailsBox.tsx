import { memo, MouseEvent, useState } from "react";
import { textBody1, textTitle3 } from "../constants/styles";
import { CourseDetailsBox } from "../types/courseDetailsBoxType";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import Button from "./UI/Button";
import ImageWrapper from "./UI/ImageWrapper";
import IconWrapper from "./UI/IconWrapper";
import LeftArrow from "./UI/icons/LeftArrow";
import { cn } from "../utils/lib/cn";
import { addToBasketHandler } from "../utils/basket";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/useReduxHooks";

type Props = {
  image: string;
  detailsList: CourseDetailsBox[];
  id: string;
  price: string | number;
};
const ProductDetailsBox = ({ detailsList, id, image, price }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Auth } = useAuth();
  const dispatch = useAppDispatch();
  const addHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToBasketHandler(id, Auth, dispatch);
  };
  return (
    <aside
      className="sticky top-2 flex flex-col gap-4 basis-[22rem] z-50 max-w-[22rem] bg-main-secondary-bg p-4 rounded-big shadow-box-shadow-3 self-start
    course-sidebar:fixed course-sidebar:bottom-0 course-sidebar:top-auto course-sidebar:left-0 
    course-sidebar:border-2 course-sidebar:border-main-primary-text course-sidebar:rounded-b-none course-sidebar:right-0 course-sidebar:max-w-none"
    >
      <ImageWrapper
        src={image}
        alt="عکس دوره سایت وینسل"
        className="max-h-[12rem] course-sidebar:hidden"
      />
      <ul className={cn("flex flex-col gap-2", collapsed && "hidden")}>
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
      <Button
        intent="primary"
        size="base"
        className="h-auto py-4"
        onClick={(e) => addHandler(e)}
      >
        افزودن به سبد خرید
      </Button>
      <IconWrapper
        className="hidden absolute -top-4 left-1/2 -translate-x-1/2 h-auto bg-main-secondary-bg course-sidebar:flex"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        <LeftArrow
          className={cn(
            "w-4 h-4 transition-transform -rotate-90 dark:invert",
            collapsed && "rotate-90"
          )}
        />
      </IconWrapper>
    </aside>
  );
};

export default memo(ProductDetailsBox);
