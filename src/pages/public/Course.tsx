import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getCourse } from '../../api/course';
import WithLoaderAndError from '../../components/WithLoaderAndError';
import { cn } from '../../utils/lib/cn';
import { bgTextColor, textTitle1, textTitle3, textTitle4 } from '../../constants/styles';
import CourseNavbar from '../../components/CourseNavbar';
import ProductDetailsBox from '../../components/ProductDetailsBox';
import { v4 as uuidv4 } from 'uuid';
import UserBoard from '../../components/UI/icons/UserBoard';
import { toPersianNumbers } from '../../utils/toPersianNumbers';
import Star from '../../components/UI/icons/Star';
import Grade from '../../components/UI/icons/Grade';
import Clock from '../../components/UI/icons/Clock';
import Language from '../../components/UI/icons/Language';
import Subtitle from '../../components/UI/icons/Subtitle';
import Prerequisites from '../../components/UI/Prerequisites';
import Markdown from '../../components/UI/Markdown';
import ProductAccordions from '../../components/UI/ProductAccordions';
import ProductComment from '../../components/UI/ProductComment';
import Cards from '../../components/UI/Cards';
import WriteComment from '../../components/WriteComment';
import ShareBox from '../../components/ShareBox';
import FaqAccordions from '../../components/UI/FaqAccordions';

const Course = () => {
    const prerequisitesRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const chaptersRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);
    const commentsRef = useRef<HTMLDivElement>(null);
    const relatedRef = useRef<HTMLDivElement>(null);
    const { id } = useParams();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['course', id],
        queryFn: () => getCourse(id as string),
    });

    const details = useMemo(() => {
        if (data) {
            let episodes = 0;
            let totalHours = 0;
            let totalMinutes = 0;
            data?.chapters?.forEach(chapter => {
                episodes += chapter.episodes.length;
                totalHours += Number(chapter.time.hour);
                totalMinutes += Number(chapter.time.min);
            });
            if (totalMinutes >= 60) {
                totalHours += Math.floor(totalMinutes / 60);
                totalMinutes %= 60;
            }
            return [
                {
                    Icon: UserBoard,
                    value: data?.owner?.name,
                    id: uuidv4(),
                },
                {
                    Icon: Star,
                    value: toPersianNumbers(data?.rating?.rate + ' ' + '(' + data?.rating?.count + ')'),
                    id: uuidv4(),
                },
                {
                    Icon: Grade,
                    value: data?.level,
                    id: uuidv4(),
                },
                {
                    Icon: Clock,
                    value: toPersianNumbers(`${totalHours} ساعت ${totalMinutes} دقیقه`),
                    id: uuidv4(),
                },
                {
                    Icon: Language,
                    value: 'زبان ' + data?.language,
                    id: uuidv4(),
                },
                {
                    Icon: Subtitle,
                    value: 'ترجمه ' + 'فارسی',
                    id: uuidv4(),
                },
            ];
        } else {
            return [];
        }
    }, [data]);

    const handleSwitch = useCallback((id: string) => {
        const refs = [infoRef, chaptersRef, prerequisitesRef, faqRef, commentsRef, relatedRef];
        for (const ref of refs) {
            if (ref?.current?.id === id) {
                ref?.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
                break;
            }
        }
    }, []);
    return (
        <WithLoaderAndError {...{ data, isLoading, isError, error }}>
            {data && (
                <main className='flex gap-4 p-4 course-sidebar:flex-col'>
                    <div className='flex flex-col gap-8 w-full'>
                        <section className='flex flex-col gap-4'>
                            <div className='flex items-center justify-between gap-2 flex-wrap'>
                                <h1 className={cn(textTitle1, bgTextColor)}>{data.title}</h1>
                                <ShareBox postId={data._id} postTitle={data.title} type='course' />
                            </div>
                            <h2 className={textTitle4}>{data.shortText}</h2>
                        </section>
                        <CourseNavbar switchHandler={handleSwitch} />
                        <Markdown text={data.Description} title='درباره‌ی دوره' ref={infoRef} sectionId='info' />
                        <ProductAccordions chapters={data.chapters} title='سرفصل‌ها‌ی دوره' ref={chaptersRef} sectionId='chapters' />
                        <Prerequisites
                            sectionId='prerequisites'
                            ref={prerequisitesRef}
                            products={data.prerequisites}
                            title='پیش نیازها'
                            description={data.prerequisitesText}
                        />
                        <section className='reset flex flex-col gap-4' ref={faqRef} id='faq'>
                            <h2 className={cn(textTitle3, bgTextColor)}>سوالات متداول</h2>
                            <FaqAccordions data={data?.faqs} />
                        </section>
                        <section className='flex flex-col gap-4' ref={commentsRef} id='comments'>
                            <h2 className={cn(textTitle3, bgTextColor)}>آخرین نظرات</h2>
                            <ul className='flex flex-col gap-4'>
                                {data.comments.map(comment => (
                                    <ProductComment
                                        key={comment._id}
                                        comment={comment.text}
                                        name={comment.userID.first_name + ' ' + comment.userID.last_name}
                                        date={comment.createdAt}
                                    />
                                ))}
                            </ul>
                            <WriteComment type='course' postId={data._id} />
                        </section>
                        <section className='flex flex-col gap-4' ref={relatedRef} id='related-courses'>
                            <h2 className={cn(textTitle3, bgTextColor)}>دوره‌های پیشنهادی</h2>
                            <Cards array={data.related} type='course' />
                        </section>
                    </div>
                    <ProductDetailsBox image={data.images[0]} detailsList={details} id={data._id} price={data.price} />
                </main>
            )}
        </WithLoaderAndError>
    );
};

export default Course;
