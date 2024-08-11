import { useState } from "react";
import { textBody1Bold, textBody2, textBody3, textTitle3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import BasketIcon from "../../components/UI/icons/Basket";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { updateBasket } from "../../api/basket";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import { Course } from "../../types/apiTypes";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import Tick from "../../components/UI/icons/Tick";
import { checkCode } from "../../api";
import toast from "react-hot-toast";
import BasketProducts from "../../components/UI/basketProducts";
import Mahak from "../../components/UI/icons/Mahak";

const Basket = () => {

  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const basketData = useAppSelector((state) => state.basket);
  const { data, isError, isLoading, error } = useQuery({
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

  const [discountCode, setDiscountCode] = useState('');
  const [discountLoading, setDiscountLoading] = useState(false);
  const [discountResult, setDiscountResult] = useState(0);

  const totalPrice = data?.listCourse.reduce((total: number, course: Course) => total + course.price, 0) || 0;
  const totalDiscount = data?.listCourse.reduce((total: number, course: Course) => total + (course.discount + discountResult || 0), 0) || 0;
  const totalPriceWithDiscount = data?.listCourse.reduce((total: number, course: Course) => total + (course.price - (course.discount + discountResult || 0)), 0) || 0;

  const handleCheckCode = async () => {
    setDiscountLoading(true);
    try {
      const response = await checkCode({ token, ...authHooks }, discountCode);

      if (response.valid) {
        setDiscountResult(response.discount);
        console.log("Discount code is valid: ", response.discount);
        toast.success('کد تخفیف با موفقیت اعمال شد');
      } else {
        setDiscountResult(0);
      }
    } catch (err) {
      console.error("Error checking discount code:", err);
      setDiscountResult(0);
      toast.error('کد تخفیف نامعتبر می باشد');
    } finally {
      setDiscountLoading(false);
    }
  };

  return (

    <div className="flex flex-col gap-6 py-10 px-10">
      <div className={cn("flex items-center rounded-small bg-main-secondary-bg border border-main-primary-text px-6 py-2.5 gap-2.5")}>
        <BasketIcon className="w-6 h-6" fill={"secondary" ? "rgb(var(--primary-text-color))" : "rgb(var(--black-color)"} />
        <h1 className={textTitle3}>سبد خرید</h1>
      </div>
      <WithLoaderAndError {...{ data, isError, isLoading, error }}>
        <div className="flex items-start justify-between flex-wrap gap-10">
          <BasketProducts item={data} listCourse={data.listCourse} handleBasket={handleBasket} />
          <div className="flex flex-col bg-main-secondary-bg border border-main-primary-text w-[25rem] rounded-small">
            <div className={cn("py-[1.4rem] px-5 text-main-primary-text", textBody1Bold)}>
              <h1>جزئیات خرید</h1>
            </div>
            <div className="flex border-t border-main-gray-50 px-2">
              <div className="flex items-center rounded-small w-full">
                <div className="w-full">
                  <Input
                    id="discountCode"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeHolder="کد تخفیف را اینجا وارد کنید و تیک را بزنید."
                    intent='primary'
                    className={cn(textBody3, 'py-[1.2rem] px-5 rounded-r-small border border-opacity-70 border-[#1A1C21] h-full')}
                  />
                </div>
                <div>
                  <Button
                    intent='primary'
                    className="hover:shadow-none flex items-center justify-center py-[1.03rem] px-4 gap-2.5 rounded-l-small border border-[#1A1C21] border-r-0 border-opacity-70 w-14 h-[3.71875rem]"
                    onClick={handleCheckCode}
                    disabled={discountLoading}
                  >
                    <Tick fill="#1A1C21" />
                  </Button>
                </div>
              </div>
            </div>

            <div className={cn("flex items-center justify-between border-t border-main-gray-50 py-[1.125rem] px-5 text-main-primary-text", textBody2)}>
              <p>تعداد دوره‌ها</p>
              <p>{toPersianNumbers(data?.listCourse.length || 0, false)}</p>
            </div>
            <div className={cn("flex items-center justify-between border-t border-main-gray-50 py-4 px-5 text-main-primary-text", textBody2)}>
              <p>مبلغ بدون تخفیف</p>
              <p>{toPersianNumbers(totalPrice, false)} تومان</p>
            </div>
            <div className={cn("flex items-center justify-between border-t border-main-gray-50 py-4 px-5 text-main-primary-text", textBody2)}>
              <p>سود شما</p>
              <p>{toPersianNumbers(totalDiscount, false)} تومان</p>
            </div>
            <div className={cn("flex items-center justify-between border-t border-main-gray-50 py-4 px-5 text-main-primary-text", textBody2)}>
              <p>مبلغ کل با اعمال تخفیف</p>
              <p>{toPersianNumbers(totalPriceWithDiscount - (discountResult || 0), false)} تومان</p>
            </div>
            <div className={cn("flex items-center bg-main-primary-bg gap-3.5 border-t border-main-gray-50 py-3 px-5 text-main-priamry-text")}>
              <Mahak />
              <p className={cn(textBody3, 'dark:text-main-green-50')}>مجموعه وینسل بخشی از مبلغ را به محک تقدیم می‌کند</p>
            </div>
            <div className="py-4 flex items-center justify-center gap-[9.06rem] border-t border-main-gray-50">
              <Button intent='primary' size='fit' className={cn('py-4 px-[8.875rem] border border-main-primary-text', textBody1Bold)}>
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
