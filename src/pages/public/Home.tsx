import { getArticles } from '../../api/article';
import { getCourses } from '../../api/course';
import CardsWithTabs from '../../components/CardsWithTabs';
import CardsWrapper from '../../components/CardsWrapper';
import ImageSlideShow from '../../components/ImageSlideShow';
import Bio from '../../components/UI/Bio';
import OrganizeSlider from '../../components/UI/OrganizeSlider';
import SummaryBox from '../../components/UI/SummaryBox';
import { companies, organizes } from '../../constants/organizes';
import { textBody1Bold, textTitle2 } from '../../constants/styles';
import { summaryBoxesLinks } from '../../constants/summaryBoxesLinks';
import { cn } from '../../utils/lib/cn';

const Home = () => {
    return (
        <main className='flex flex-col gap-4'>
            <section>
                <ImageSlideShow />
            </section>
            <section className='flex flex-col gap-4 pt-4 text-center p-8 leading-tight'>
                <h1 className={cn('', textTitle2)}>وینسل چیست؟</h1>
                <p className={cn('', textBody1Bold)}>
                    وینسل یک سایت آموزشی است که به طور خاص بر روی آموزش زیست‌شناسی تمرکز دارد. این سایت منابع متنوعی از جمله مقالات،
                    ویدیوهای آموزشی، آزمون‌های آنلاین و دوره‌های تخصصی را ارائه می‌دهد تا به دانش‌آموزان و دانشجویان کمک کند تا مفاهیم
                    زیست‌شناسی را بهتر درک کنند و در امتحانات خود موفق شوند. وینسل با استفاده از روش‌های نوین آموزشی و بهره‌گیری از اساتید
                    مجرب، محیطی مناسب برای یادگیری فراهم می‌کند.
                </p>
                <div className='flex gap-4 flex-wrap items-center justify-center'>
                    {summaryBoxesLinks.map(({ id, IconComp, title, url }) => (
                        <SummaryBox key={id} {...{ IconComp, title, url }} />
                    ))}
                </div>
            </section>
            <section className='flex flex-col gap-4 pt-4 text-center p-8'>
                <CardsWithTabs title='آخرین دوره ها' />
                <CardsWrapper
                    title='بهترین های وینسل'
                    type='course'
                    linkUrl='/courses'
                    getterFunc={() => getCourses(undefined, 5, undefined, 'popular')}
                />
                <CardsWrapper
                    title='آخرین مقالات'
                    type='article'
                    linkUrl='/articles'
                    getterFunc={() => getArticles(undefined, 5, 'latest')}
                />
            </section>
            <Bio />
            <OrganizeSlider data={companies} title='شرکت هایی که به ما اعتماد کردن' />
            <OrganizeSlider isBlackAndWhite data={organizes} title='برترین دوره های بین المللی با زیرنویس اختصاصی' />
        </main>
    );
};

export default Home;
