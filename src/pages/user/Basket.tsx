import { bgTextColor, bgTextFull, textBody1, textBody1Bold, textBody2, textBody3, textTitle3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import BasketIcon from "../../components/UI/icons/Basket";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { updateBasket } from "../../api/basket";
import { useAppSelector } from "../../hooks/useReduxHooks";
import Trash from "../../components/UI/icons/Trash";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { Course } from "../../types/apiTypes";
import mahak from '../../../public/images/mahak.svg';
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Tick from "../../components/UI/icons/Tick";
import image from '../../../public/images/fake/dna.png';
import ImageWrapper from "../../components/UI/ImageWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type BasketDataType = {
  listCourse: Course[];
}

const Basket = () => {

  const [id, setId] = useState<string>('');

  const navigate = useNavigate();

  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const basketData = useAppSelector((state) => state.basket);
  const { data, isError, isLoading, error } = useQuery<BasketDataType>({
    queryKey: ["basket", basketData.productsId],
    queryFn: () => updateBasket({ token, ...authHooks }, basketData.productsId),
  });

  const handleBasket = (courseId: string) => {
    const updatedCourseIds = basketData.productsId.filter(id => id !== courseId);
    updateBasket({ token, ...authHooks }, updatedCourseIds)
      .then(response => {
        console.log("Basket updated:", response);
      })
      .catch(err => {
        console.error("Error updating basket:", err);
      });
  }

  const totalPrice = data?.listCourse.reduce((total, course) => total + course.price, 0) || 0;
  const totalDiscount = data?.listCourse.reduce((total, course) => total + course.discount, 0) || 0;
  const totalPriceWithDiscount = data?.listCourse.reduce((total, course) => total + (course.price - course.discount), 0) || 0;

  return (
    <div className="flex flex-col gap-6 py-10 px-16">
      <div className={cn("flex items-center rounded-small bg-main-primary-bg border border-main-primary-text px-6 py-2.5 gap-2.5")}>
        <BasketIcon className="w-6 h-6" fill={"secondary" ? "rgb(var(--primary-text-color))" : "rgb(var(--black-color)"} />
        <h1 className={textTitle3}>سبد خرید</h1>
      </div>
      <WithLoaderAndError {...{ data, isError, isLoading, error }}>
      <div className="flex gap-10 items-start justify-between">
        <div className='flex flex-col bg-main-primary-bg border border-main-primary-text w-[53.75rem] rounded-small'>
          <div className={cn("flex gap-[26rem] py-6 px-11", textBody1Bold)}>
            <p>دوره</p>
            <p>قیمت</p>
          </div>
          {
            data && data.listCourse && data.listCourse.map((course: Course) => {
              return (
                <div key={course._id} className="flex items-center border-t border-main-gray-50 gap-2.5 py-2.5 px-6">
                  <div onClick={()=>navigate('course/:id/:slug')} className="relative w-[3.9rem] h-[2.8rem]">
                    <ImageWrapper className="border-none rounded-[0.5rem] w-full h-full" src={course.images[0]} alt={course.title} />
                    <div className="absolute inset-1 bg-gradient-to-l rounded-small from-transparent to-black opacity-90 mix-blend-overlay"></div>
                  </div>
                  <div className="flex items-center justify-between px-4 w-full">
                    <p className={cn(textBody2, 'text-main-primary-text p-2')}>{course.title}</p>
                    <p className={cn(textBody2, 'text-main-primary-text p-2')}>
                      {toPersianNumbers((course.price), false)} تومان
                    </p>
                    <div onClick={() => handleBasket(course._id)} className='flex p-2 border rounded-small border-main-primary-text border-main-gray-50 cursor-pointer'>
                      <Trash />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col bg-main-primary-bg border border-main-primary-text w-[25rem] rounded-small">
          <div className={cn("py-[1.4rem] px-5 text-main-primary-text", textBody1Bold)}>
            <h1>جزئیات خرید</h1>
          </div>
          <div className="flex border-t border- border-main-gray-50 px-2">
              <Input
                id="discountCode"
                placeHolder="کد تخفیف را اینجا وارد کنید و تیک را بزنید."
                intent={"secondary"}
                className="py-[1.03rem] px-5 rounded-r-small"
              />
              <Button intent='primary' className="flex items-center justify-center py-[1.03rem] px-4 gap-2.5 rounded-l-small" >
                <Tick fill="#1A1C21" />
              </Button>
          </div>
          <div className={cn("flex items-center justify-between border-t border- border-main-gray-50 py-[1.125rem] px-5 text-main-primary-text", textBody2)}>
            <p>تعداد دوره ها</p>
            <p>{toPersianNumbers(data?.listCourse.length || 0, false)}</p>
          </div>
          <div className={cn("flex items-center justify-between border-t border- border-main-gray-50 py-4 px-5 text-main-primary-text", textBody2)}>
            <p>مبلغ بدون تخفیف</p>
            <p>{toPersianNumbers(totalPrice, false)} تومان</p>
          </div>
          <div className={cn("flex items-center justify-between border-t border- border-main-gray-50 py-4 px-5 text-main-primary-text", textBody2)}>
            <p>سود شما</p>
            <p>{toPersianNumbers(totalDiscount, false)} تومان</p>
          </div>
          <div className={cn("flex items-center justify-between border-t border- border-main-gray-50 py-4 px-5 text-main-primary-text", textBody2)}>
            <p>مبلغ کل با اعمال تخفیف</p>
            <p>{toPersianNumbers(totalPriceWithDiscount, false)} تومان</p>
          </div>
          <div className={cn("flex items-center bg-[#F0FFE5] dark:bg-main-primary-bg gap-3.5 border-t border- border-main-gray-50 py-3 px-5 text-main-priamry-text")}>
            <img src={mahak} alt="mahak" />
            <p className={cn(textBody3)}>مجموعه وینسل بخشی از مبلغ را به محک تقدیم می‌کند</p>
          </div>
          <div className="py-4 flex items-center justify-center gap-[9.06rem] border-t border- border-main-gray-50">
            <Button intent='primary' size='fit' className={cn('py-4 px-[8.875rem]', textBody1Bold)}>
              خرید دوره
            </Button>
          </div>
        </div>
      </div>
      </WithLoaderAndError>
    </div>
  );
};

export default Basket;
