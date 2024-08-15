import IconWrapper from "./IconWrapper";
import ImageWrapper from "./ImageWrapper";
import { useNavigate } from "react-router-dom";
import { textBody1Bold, textBody2, textTitle4 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Trash from "./icons/Trash";
import { Course } from "../../types/apiTypes";
import Basket from "./icons/Basket";

type Props = {
  item: Course;
  listCourse: Course[];
  handleDeleteProduct: Function;
};

const BasketProducts = ({ item, listCourse, handleDeleteProduct }: Props) => {
  const navigate = useNavigate();

  if (listCourse.length === 0) {
    return (
      <div className="flex flex-col items-center bg-main-secondary-bg rounded-small">
        <div className="flex">
          <div className="py-6 px-11 mobile:px-8">
            <h1 className={textBody1Bold}>دوره</h1>
          </div>
          <div className="py-6 px-12 mobile:px-8">
            <h1 className={textBody1Bold}>قیمت</h1>
          </div>
        </div>
        <div className="flex items-center justify-center p-10 gap-2 border-t border-main-gray-50">
          <Basket className="w-5 h-5 dark:invert" />
          <p className={textTitle4}>سبد خرید شما خالی است</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-between bg-main-secondary-bg rounded-small article:flex-col">
      <div className="flex flex-col">
        <div className="py-6 px-11 article:px-4">
          <h1 className={textBody1Bold}>دوره</h1>
        </div>
        {item &&
          listCourse &&
          listCourse.map((course) => {
            return (
              <div
                key={course._id}
                className="flex items-center gap- py-2.5 px-6 border-t border-main-gray-50 h-[4.125rem]"
              >
                <div
                  onClick={() => navigate("/course/id/slug")}
                  className="relative w-[3.9rem] h-[2.8rem] cursor-pointer"
                >
                  <ImageWrapper
                    className="border-none rounded-[0.5rem] w-full h-full"
                    src={course.images[0]}
                    alt={course.title}
                  />
                  <div className="absolute inset-1.5 bg-gradient-to-l rounded-small from-transparent to-black opacity-90 mix-blend-overlay"></div>
                </div>
                <div className="px-4">
                  <span className={cn(textBody2, "text-main-primary-text p-2")}>
                    {course.title}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex flex-col">
        <div className="py-6 px-12 article:px-4">
          <h1 className={textBody1Bold}>قیمت</h1>
        </div>
        {item &&
          listCourse &&
          listCourse.map((course) => {
            return (
              <div
                key={course._id}
                className="flex items-center px-4 pt-0.5 gap-10 border-t border-main-gray-50 h-[4.125rem]"
              >
                <span className={cn(textBody2, "text-main-primary-text p-2")}>
                  {toPersianNumbers(course.price, false)} تومان
                </span>
                <div className="px-7">
                  <IconWrapper
                    onClick={() => handleDeleteProduct(course._id)}
                    className="flex border border-main-primary-text border-main-gray-50"
                  >
                    <Trash />
                  </IconWrapper>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BasketProducts;
