import IconWrapper from "./IconWrapper";
import ImageWrapper from "./ImageWrapper";
import { useNavigate } from "react-router-dom";
import { textBody1Bold, textBody2 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import Trash from "./icons/Trash";
import { Course } from "../../types/apiTypes";

type Props = {
    item: Course,
    listCourse: Course[],
    handleBasket: Function
}

const BasketProducts = ({ item, listCourse, handleBasket }: Props) => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-between bg-main-secondary-bg border border-main-primary-text rounded-small">
            <div className="flex flex-col">
                <div className="py-6 px-11">
                    <h1 className={textBody1Bold}>دوره</h1>
                </div>
                {
                    item && listCourse && listCourse.map((course) => {
                        return (
                            <div key={course._id} className="flex items-center gap- py-2.5 px-6 border-t border-main-gray-50">
                                <div onClick={() => navigate('/course/id/slug')} className="relative w-[3.9rem] h-[2.8rem]">
                                    <ImageWrapper className="border-none rounded-[0.5rem] w-full h-full cursor-pointer" src={course.images[0]} alt={course.title} />
                                    <div className="absolute inset-1.5 bg-gradient-to-l rounded-small from-transparent to-black opacity-90 mix-blend-overlay"></div>
                                </div>
                                <div className="px-4">
                                    <span className={cn(textBody2, 'text-main-primary-text p-2')}>{course.title}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col">
                <div className="py-6 px-11">
                    <h1 className={textBody1Bold}>قیمت</h1>
                </div>
                {
                    item && listCourse && listCourse.map((course) => {
                        return (
                            <div key={course._id} className="flex items-center px-4 py-3.5 gap-10 border-t border-main-gray-50">
                                <span className={cn(textBody2, 'text-main-primary-text p-2')}>
                                    {toPersianNumbers(course.price, false)} تومان
                                </span>
                                <div className="px-7">
                                    <IconWrapper onClick={() => handleBasket(course._id)} className="flex border border-main-primary-text border-main-gray-50">
                                        <Trash fill={"secondary" ? "rgb(var(--primary-text-color))" : "rgb(var(--black-color)"} />
                                    </IconWrapper>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BasketProducts;