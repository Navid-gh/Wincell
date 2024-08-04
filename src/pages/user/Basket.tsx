import { bgTextFull, textTitle4 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import BasketIcon from "../../components/UI/icons/Basket";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { updateBasket } from "../../api/basket";
import { useAppSelector } from "../../hooks/useReduxHooks";

const Basket = () => {
  const { token, data: userData } = useAuth();
  const authHooks = useAuthHooks();
  const basketData = useAppSelector((state) => state.basket);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["basket", basketData.productsId],
    queryFn: () => updateBasket({ token, ...authHooks }, basketData.productsId),
  });
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "bg-main-primary-bg border border-main-primary-text",
          bgTextFull
        )}
      >
        <BasketIcon className="w-4 h-4" />
        <h1 className={textTitle4}>سبد خرید</h1>
      </div>
      <WithLoaderAndError {...{ data, isError, isLoading, error }}>
        <div></div>
      </WithLoaderAndError>
    </div>
  );
};

export default Basket;
