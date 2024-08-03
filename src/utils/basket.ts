import toast from "react-hot-toast";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { addToBasket, removeProduct } from "../redux/basketSlice";

export const addToBasketHandler = (
  id: string,
  Auth: boolean,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  if (!Auth) {
    toast.error("لطفا وارد حساب کاربری خود شوید");
    return;
  }
  dispatch(addToBasket({ id }));
  toast.success("محصول با موفقیت به سبد خرید اضافه شد");
};

export const removeFromBasketHandler = (
  id: string,
  Auth: boolean,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  if (!Auth) {
    toast.error("لطفا وارد حساب کاربری خود شوید");
    return;
  }
  dispatch(removeProduct({ id }));
  toast.success("محصول با موفقیت حذف گردید");
};
