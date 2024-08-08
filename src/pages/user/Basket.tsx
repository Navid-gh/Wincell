import { bgTextFull, textBody1Bold, textBody2, textTitle3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import BasketIcon from "../../components/UI/icons/Basket";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { updateBasket } from "../../api/basket";
import { useAppSelector } from "../../hooks/useReduxHooks";
import image from '../../../public/images/fake/dna.png';
import Trash from "../../components/UI/icons/Trash";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const Basket = () => {

  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const basketData = useAppSelector((state) => state.basket);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["basket", basketData.productsId],
    queryFn: () => updateBasket({ token, ...authHooks }, basketData.productsId),
  });

  return (
    <div className="flex flex-col gap-4 px-6 py-14">
      <div
        className={cn(
          bgTextFull,
          "bg-main-primary-bg border border-main-primary-text px-6 py-[10px] gap-[10px]"
        )}
      >
        <BasketIcon
          className="w-6 h-6"
          fill={
            "secondary"
              ? "rgb(var(--primary-text-color))"
              : "rgb(var(--black-color)"
          }
        />
        <h1 className={textTitle3}>سبد خرید</h1>
      </div>
      <WithLoaderAndError {...{ data, isError, isLoading, error }}>
        <div className="flex gap-6">
          <div className='flex flex-col bg-main-primary-bg border border-main-primary-text w-[860px] rounded-small'>
            <div className={cn(
              "flex gap-[417px] py-6 px-11 border-b border-main-gray-50",
              textBody1Bold
            )}>
              <p>دوره</p>
              <p>قیمت</p>
            </div>
            <div className="flex items-center border-t border-main-gray-50 gap-[10px] py-[10px] px-6">
              <div className="w-[63px] h-[46px] rounded-small">
                <img src={image} alt="" />
              </div>
              <div className="flex justify-between px-4 w-full">
                <p className={cn(textBody2, 'text-main-primary-text p-2')}>دوره رونویسی از DNA</p>
                <p className={cn(textBody2, 'text-main-primary-text p-2')}>
                  {toPersianNumbers('2,900,000', false)} تومان
                </p>
                <div className='flex gap[10px] p-2 border rounded-small border-main-primary-text border-main-gray-50 cursor-pointer'>
                  <Trash />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WithLoaderAndError>
    </div>
  );
};

export default Basket;
