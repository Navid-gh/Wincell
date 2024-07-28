import SelectorContent from "../../components/UI/SelectorContent";
import { textTitle1, bgTextColor, textBody1 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";

const Articles = () => {
    return (
        <main className="flex flex-col gap-4 justify-center my-6 mx-20">
            <section className="flex flex-col gap-4">
                <h1 className={` ${cn("", textTitle1, bgTextColor)} px-0`}>مقاله های وینسل</h1>
                <p className={`${cn("", textBody1)} w-11/12 text-justify`}>وینسل یک سایت آموزشی است که به طور خاص بر روی آموزش زیست‌شناسی تمرکز دارد. این سایت منابع متنوعی از جمله مقالات، ویدیوهای آموزشی، آزمون‌های آنلاین و دوره‌های تخصصی را ارائه می‌دهد تا به دانش‌آموزان و دانشجویان کمک کند تا مفاهیم زیست‌شناسی را بهتر درک کنند و در امتحانات خود موفق شوند. وینسل با استفاده از روش‌های نوین آموزشی و بهره‌گیری از اساتید مجرب، محیطی مناسب برای یادگیری فراهم می‌کند.</p>
            </section>
            <SelectorContent />
        </main>
    )
}

export default Articles;