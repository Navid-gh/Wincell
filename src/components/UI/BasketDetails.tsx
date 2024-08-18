import { textBody2, textBody3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Mahak from "../../components/UI/icons/Mahak";
import { Course } from "../../types/apiTypes";

type Props = {
    listCourse: Course[];
    totalPrice: number,
    totalDiscount: number,
    totalPriceWithDiscount: number,
    discountResult: number
}

const BasketDetails = ({ listCourse, totalPrice, totalDiscount, totalPriceWithDiscount, discountResult }: Props) => {

    const itemDetails = [
        {
            title: 'مبلغ بدون تخفیف',
            amount: totalPrice
        },
        {
            title: 'سود شما',
            amount: totalDiscount
        },
        {
            title: 'مبلغ کل با اعمال تخفیف',
            amount: totalPriceWithDiscount - (discountResult || 0)
        }
    ];

    return (
        <div className="text-main-primary-text">
            <div
                className={cn(
                    "flex items-center justify-between border-t border-main-gray-50 py-[1.125rem] px-5",
                    textBody2
                )}
            >
                <span>تعداد دوره‌ها</span>
                <span>
                    {toPersianNumbers(listCourse.length || 0, false)}
                </span>
            </div>
            {
                itemDetails.map((item, id) => {
                    return (
                        <div
                            key={id}
                            className={cn(
                                "flex items-center justify-between border-t border-main-gray-50 py-4 px-5",
                                textBody2
                            )}
                        >
                            <span>
                                {item.title}
                            </span>
                            <span>
                                {toPersianNumbers(item.amount, false)} تومان
                            </span>
                        </div>
                    )
                })
            }
            <div className="border-t border-main-gray-50">
                <div className="flex items-center bg-main-green-50 dark:invert gap-3.5 py-3 px-5">
                    <Mahak className="dark:invert" />
                    <p className={cn(
                        textBody3,
                        'dark:invert'
                    )}>
                        مجموعه وینسل بخشی از مبلغ را به محک تقدیم می‌کند
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BasketDetails;