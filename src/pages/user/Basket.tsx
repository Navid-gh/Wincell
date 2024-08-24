import { useState } from "react";
import {
  textBody1Bold,
  textBody3,
  textTitle3
} from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import BasketIcon from "../../components/UI/icons/Basket";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import { useQuery } from "@tanstack/react-query";
import { useAuth, useAuthHooks } from "../../hooks/useAuth";
import { Payment, updateBasket } from "../../api/basket";
import { useAppSelector } from "../../hooks/useReduxHooks";
import { Course } from "../../types/apiTypes";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import BasketProducts from '../../components/UI/BasketProducts';
import Tick from "../../components/UI/icons/Tick";
import { checkCode } from "../../api";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import BasketDetails from "../../components/UI/BasketDetails";

const Basket = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { token } = useAuth();
  const authHooks = useAuthHooks();
  const basketData = useAppSelector((state) => state.basket);
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["basket", basketData.productsId],
    queryFn: () => updateBasket({ token, ...authHooks }, basketData.productsId),
  });

    const handleBasket = async (courseId: string) => {
        const newProducts = products.filter(product => product._id !== courseId);
        dispatch(
            updateProduct({
                productsId: newProducts.map(product => product._id),
                qty: newProducts.length,
            })
        );
        setProducts(newProducts);
    };

    const [discountCode, setDiscountCode] = useState('');
    const [discountLoading, setDiscountLoading] = useState(false);
    const [discountResult, setDiscountResult] = useState(0);

    const totalPrice = products.reduce((total: number, course: Course) => total + course.priceAfterDiscount, 0) || 0;
    const totalDiscount = products.reduce((total: number, course: Course) => total + (course.discount + discountResult || 0), 0) || 0;
    const totalPriceWithDiscount =
        products.reduce(
            (total: number, course: Course) => total + (course.priceAfterDiscount - (course.discount + discountResult || 0)),
            0
        ) || 0;

    const handleCheckCode = async () => {
        setDiscountLoading(true);
        try {
            const response = await checkCode({ token, ...authHooks }, discountCode);
            if (response.valid) {
                setDiscountResult(response.discount);
                console.log('Discount code is valid: ', response.discount);
                toast.success('کد تخفیف با موفقیت اعمال شد');
            } else {
                setDiscountResult(0);
                toast.error('کد تخفیف نامعتبر می باشد');
            }
        } catch (err) {
            console.error('Error checking discount code:', err);
            setDiscountResult(0);
            toast.error('کد تخفیف نامعتبر می باشد');
        } finally {
            setDiscountLoading(false);
        }
    };

  const handlePurchase = async () => {
    const basketIds = basketData.productsId.join(',');
    try {
      const paymentResponse = await Payment({ token, ...authHooks }, basketIds);
      if (paymentResponse.success) {
        navigate(`/basket/${id}`);
      } else {
        toast.error('خطا در پرداخت. لطفا دوباره تلاش کنید.');
      }
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error('خطا در پردازش پرداخت');
    }
  };

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex items-center rounded-small bg-main-secondary-bg border border-main-primary-text px-6 py-2.5 gap-2.5'>
                <BasketIcon className='w-6 h-6 dark:invert' />
                <h1 className={textTitle3}>سبد خرید</h1>
            </div>
            <WithLoaderAndError {...{ data, isError, isLoading, error }}>
                <div className='flex flex-wrap justify-between items-start gap-6'>
                    <BasketProducts listCourse={products} handleDeleteProduct={handleBasket} />
                    <div className='flex flex-col bg-main-secondary-bg text-main-primary-text max-w-[25rem] w-full rounded-small'>
                        <div className={cn('py-[1.4375rem] px-5', textBody1Bold)}>
                            <h2>جزئیات خرید</h2>
                        </div>
                        <div className='flex border-t border-main-gray-50 px-2'>
                            <div className='flex justify-center items-center rounded-small w-full'>
                                <Input
                                    id='discountCode'
                                    value={discountCode}
                                    onChange={e => setDiscountCode(e.target.value)}
                                    placeHolder='کد تخفیف را اینجا وارد کنید.'
                                    intent='primary'
                                    className={cn(
                                        textBody3,
                                        'py-[0.5rem] px-5 h-full flex justify-center rounded-r-small border border-opacity-70 border-main-secondary-text'
                                    )}
                                />
                                <Button
                                    intent='primary'
                                    className='hover:shadow-none rounded-l-small border border-main-secondary-text border-r-0 border-opacity-70 py-[1.03125rem] px-4'
                                    onClick={handleCheckCode}
                                    disabled={discountLoading}>
                                    <Tick fill='#1A1C21' />
                                </Button>
                            </div>
                        </div>
                        <BasketDetails
                            listCourse={products}
                            totalPrice={totalPrice}
                            totalDiscount={totalDiscount}
                            totalPriceWithDiscount={totalPriceWithDiscount}
                            discountResult={discountResult}
                        />
                        <div className='px-4 py-4 text-center border-t border-main-gray-50'>
                            <Button
                                intent='primary'
                                size='fit'
                                className='py-4 px-[8.875rem] border article:px-0 article:w-full'
                                onClick={handlePurchase}>
                                نکمیل خرید
                            </Button>
                        </div>
                    </div>
                </div>
            </WithLoaderAndError>
        </div>
    );
};

export default Basket;
