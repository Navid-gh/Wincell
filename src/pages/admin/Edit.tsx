import { useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth, useAuthHooks } from '../../hooks/useAuth';
import { Article, Course } from '../../types/apiTypes';
import { editArticle } from '../../api/article';
import { editCourse } from '../../api/course';
import Button from '../../components/UI/Button';
const Edit = () => {
    const { parent } = useParams();
    const location = useLocation();
    const queryClient = useQueryClient();
    const titleRef = useRef<HTMLInputElement | null>(null);
    const shortTextRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const imagesRef = useRef<HTMLInputElement | null>(null);
    const categoryRef = useRef<HTMLInputElement | null>(null);
    const sortRef = useRef<HTMLInputElement | null>(null);
    const ownerNameRef = useRef<HTMLInputElement | null>(null);
    const ownerLogoRef = useRef<HTMLInputElement | null>(null);

    const { token } = useAuth();
    const auth = useAuthHooks();

    if (parent === 'articles') {
        const timeRef = useRef<HTMLInputElement | null>(null);
        const ownerDescRef = useRef<HTMLInputElement | null>(null);
        const details = location.state as Article;
        const editArticleMutation = useMutation({
            mutationFn: (id: string) =>
                editArticle({ token, ...auth }, id, {
                    shortText: shortTextRef.current!.value,
                    title: titleRef.current!.value,
                    category: categoryRef.current!.value.split(',') || [],
                    images: imagesRef.current?.value.split(',') || [],
                    author: {
                        image: ownerLogoRef.current!.value,
                        name: ownerNameRef.current!.value,
                        desc: ownerDescRef.current!.value,
                    },
                    description: textRef.current!.value,
                    sortByNumber: Number(sortRef.current!.value),
                    timeNeeded: timeRef.current!.value,
                }),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['articles'] });
                toast.success('موفقیت آمیز');
            },
            onError: err => {
                toast.error('خطا در برقراری ارتباط');
                console.log(err);
            },
        });
        return (
            <div className='flex flex-col gap-6'>
                <input type='text' placeholder='title' defaultValue={details.title} ref={titleRef} />
                <input
                    type='text'
                    placeholder='متنی کوتاه برای نمایش در کنار سر تیتر'
                    defaultValue={details.shortText}
                    ref={shortTextRef}
                />
                <input type='text' placeholder='آیدی دسته بندی ها' ref={categoryRef} />
                <input type='text' placeholder='عکس ها' ref={imagesRef} defaultValue={details.images.map(image => image)} />
                <input type='text' placeholder='شماره ترتیب' ref={sortRef} defaultValue={details.sortByNumber} />
                <input type='text' placeholder='زمان مورد نیاز' ref={timeRef} defaultValue={details?.timeNeeded} />
                <textarea
                    placeholder='مقاله ی خود را در فرمت مارکداون بنویسید'
                    cols={30}
                    rows={10}
                    defaultValue={details.description}
                    ref={textRef}></textarea>
                <input type='text' placeholder='نام نویسنده' ref={ownerNameRef} defaultValue={details.author.name} />
                <input type='text' placeholder='توضیح نویسنده' ref={ownerDescRef} defaultValue={details.author?.desc} />
                <input type='text' placeholder='عکس نویسنده' ref={ownerLogoRef} defaultValue={details.author.image} />
                <Button
                    intent={'secondary'}
                    size={'fit'}
                    className='bg-pink max-w-fit'
                    disabled={editArticleMutation.isPending}
                    onClick={() => {
                        editArticleMutation.mutate(details._id);
                    }}>
                    تایید
                </Button>
            </div>
        );
    } else if (parent === 'courses') {
        const priceRef = useRef<HTMLInputElement | null>(null);
        const discountRef = useRef<HTMLInputElement | null>(null);
        const typeRef = useRef<HTMLSelectElement | null>(null);
        const levelRef = useRef<HTMLSelectElement | null>(null);
        const spotRef = useRef<HTMLInputElement | null>(null);
        const LangRef = useRef<HTMLInputElement | null>(null);
        const neededTimeRef = useRef<HTMLInputElement | null>(null);
        const prerequisitesTxtRef = useRef<HTMLInputElement | null>(null);
        const prerequisitesRef = useRef<HTMLInputElement | null>(null);
        const details = location.state as Course;

        const editCourseMutation = useMutation({
            mutationFn: (id: string) => {
                return editCourse({ token, ...auth }, id, {
                    shortText: shortTextRef.current!.value,
                    title: titleRef.current!.value,
                    category: categoryRef.current!.value.split(',') || [],
                    images: imagesRef.current?.value.split(',') || [],
                    discount: Number(discountRef.current!.value),
                    level: levelRef.current!.value,
                    price: Number(priceRef.current!.value),
                    type: typeRef.current!.value as 'online' | 'offline' | 'webinar',
                    spotPlayerID: spotRef.current!.value,
                    Description: textRef.current!.value,
                    language: LangRef.current!.value,
                    neededTime: {
                        hour: Number(neededTimeRef.current!.value.split(':')[0]),
                        minute: Number(neededTimeRef.current!.value.split(':')[1]),
                    },
                    owner: {
                        image: ownerLogoRef.current!.value,
                        name: ownerNameRef.current!.value,
                    },
                    prerequisitesText: prerequisitesTxtRef.current!.value,
                    prerequisites: prerequisitesRef.current!.value ? prerequisitesRef.current!.value.split(',') : [],
                    sortByNumber: Number(sortRef.current!.value),
                });
            },
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ['courses'] });
                toast.success('موفقیت آمیز');
            },
            onError: err => {
                console.log(err);
                toast.error('خطا در برقراری ارتباط');
            },
        });
        return (
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-4'></div>
                <input type='text' placeholder='title' defaultValue={details.title} ref={titleRef} />
                <input
                    type='text'
                    placeholder='متنی کوتاه برای نمایش در کنار سر تیتر'
                    defaultValue={details.shortText}
                    ref={shortTextRef}
                />
                <textarea
                    placeholder='توضیحات دوره خود را در فرمت مارکداون بنویسید'
                    cols={30}
                    rows={10}
                    defaultValue={details.Description}
                    ref={textRef}></textarea>
                <input type='number' placeholder='قیمت اصلی دوره' defaultValue={details.price} ref={priceRef} />
                <input type='text' placeholder='آیدی دسته بندی ها' ref={categoryRef} />
                <input type='number' placeholder='تخفیف' defaultValue={details.discount} ref={discountRef} />
                <input type='text' placeholder='عکس ها' ref={imagesRef} defaultValue={details.images.map(image => image)} />
                <input type='text' placeholder='شماره ترتیب' ref={sortRef} defaultValue={details.sortByNumber} />
                <select ref={typeRef} defaultValue={details.type}>
                    <option value='offline'>اسپات پلیر</option>
                    <option value='online'>انلاین</option>
                </select>
                <select ref={levelRef} defaultValue={details.level}>
                    <option value='مبتدی'>مبتدی</option>
                    <option value='متوسط'>متوسط</option>
                    <option value='پیشرفته'>پیشرفته</option>
                </select>
                <input type='text' placeholder='زبان دوره' ref={LangRef} defaultValue={details.language} />
                <input
                    type='text'
                    placeholder='زمان مورد نیاز دوره به صورت ساعت:دقیقه'
                    ref={neededTimeRef}
                    defaultValue={details.neededTime.hour + ' : ' + details.neededTime.minute}
                />
                <input type='text' placeholder='نام برگزار کننده ' ref={ownerNameRef} defaultValue={details.owner.name} />
                <input type='text' placeholder='لوگو برگذار کننده ' ref={ownerLogoRef} defaultValue={details.owner.image} />
                <input type='text' placeholder='متن پیش نیاز' ref={prerequisitesTxtRef} defaultValue={details.prerequisitesText} />
                <input
                    type='text'
                    placeholder='آیدی دوره های پیش نیاز به صورت جداشده با کاما'
                    ref={prerequisitesRef}
                    defaultValue={details.prerequisites.join(',')}
                />
                <input type='text' placeholder='ایدی اسپات پلیر' ref={spotRef} defaultValue={details.spotPlayerID} />
                <Button
                    intent={'secondary'}
                    size={'fit'}
                    className='bg-pink max-w-fit'
                    disabled={editCourseMutation.isPending}
                    onClick={() => {
                        editCourseMutation.mutate(details._id);
                    }}>
                    تایید
                </Button>
            </div>
        );
    }
};

export default Edit;
