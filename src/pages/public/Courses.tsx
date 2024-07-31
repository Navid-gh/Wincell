import DropDown from "../../components/UI/DropDown";
import { textTitle1, bgTextColor, textBody1Bold } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../../api/course";
import ProductCard from "../../components/UI/ProductCard";

const CoursesP = () => {

    const { data } = useQuery({
        queryKey: ['courses'],
        queryFn: () => getCourses(undefined, undefined, undefined)
    })

    return (
        <main className="flex flex-col gap-4 justify-center my-6 mx-20">
            <section className="flex flex-col gap-4">
                <h1 className={` ${cn("", textTitle1, bgTextColor)} px-0`}>دوره های وینسل</h1>
                <p className={`${cn("", textBody1Bold)} max-w-[1244px] text-justify my-2`}>وینسل یک سایت آموزشی است که به طور خاص بر روی آموزش زیست‌شناسی تمرکز دارد. این سایت منابع متنوعی از جمله مقالات، ویدیوهای آموزشی، آزمون‌های آنلاین و دوره‌های تخصصی را ارائه می‌دهد تا به دانش‌آموزان و دانشجویان کمک کند تا مفاهیم زیست‌شناسی را بهتر درک کنند و در امتحانات خود موفق شوند. وینسل با استفاده از روش‌های نوین آموزشی و بهره‌گیری از اساتید مجرب، محیطی مناسب برای یادگیری فراهم می‌کند.</p>
            </section>
            <DropDown />
            <div className="flex gap-10 -mt-64">
                {data && data.map((item) => {
                    return (
                        <ProductCard data={item} />
                    )
                })}
            </div>
        </main>
    )
}

export default CoursesP;