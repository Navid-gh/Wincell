import CardsWithTabs from "../../components/CardsWithTabs";
import CardsWrapper from "../../components/CardsWrapper";
import ImageSlideShow from "../../components/ImageSlideShow";
import Bio from "../../components/UI/Bio";
import OrganizeSlider from "../../components/UI/OrganizeSlider";
import SummaryBox from "../../components/UI/SummaryBox";
import { textBody1Bold, textTitle2 } from "../../constants/styles";
import { summaryBoxesLinks } from "../../constants/summaryBoxesLinks";
import { cn } from "../../utils/lib/cn";

const Home = () => {
  return (
    <main className="flex flex-col gap-4">
      <section>
        <ImageSlideShow />
      </section>
      <section className="flex flex-col gap-4 pt-4 text-center p-8 leading-tight">
        <h1 className={cn("", textTitle2)}>وینسل چیست؟</h1>
        <p className={cn("", textBody1Bold)}>
          وینسل یک سایت آموزشی است که به طور خاص بر روی آموزش زیست‌شناسی تمرکز
          دارد. این سایت منابع متنوعی از جمله مقالات، ویدیوهای آموزشی، آزمون‌های
          آنلاین و دوره‌های تخصصی را ارائه می‌دهد تا به دانش‌آموزان و دانشجویان
          کمک کند تا مفاهیم زیست‌شناسی را بهتر درک کنند و در امتحانات خود موفق
          شوند. وینسل با استفاده از روش‌های نوین آموزشی و بهره‌گیری از اساتید
          مجرب، محیطی مناسب برای یادگیری فراهم می‌کند.
        </p>
        <div className="flex gap-4 flex-wrap items-center justify-center">
          {summaryBoxesLinks.map(({ id, IconComp, title, url }) => (
            <SummaryBox key={id} {...{ IconComp, title, url }} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4 pt-4 text-center p-8">
        <CardsWithTabs apiUrl="api/courses" title="آخرین دوره ها" />
        <CardsWrapper
          apiUrl="api/courses"
          title="بهترین های وینسل"
          type="course"
        />
        <CardsWrapper
          apiUrl="api/articles"
          title="آخرین مقالات"
          type="article"
        />
      </section>
      <Bio />
      <OrganizeSlider title="برترین دوره های بین المللی با زیرنویس اختصاصی" />
    </main>
  );
};

export default Home;
