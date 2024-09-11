import { useRef, useState, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Chapter } from '../../types/apiTypes';
import { useAuth, useAuthHooks } from '../../hooks/useAuth';
import { addChapter, addEpisode, editChapter, removeChapter, removeEpisode } from '../../api/course';

type State = {
    id: string;
    chapters: Chapter[];
};

const ManageChapters = () => {
    const { id, chapters }: State = useLocation().state;
    const [chaptersState, setChaptersState] = useState(chapters);
    const [chapterId, setChapterId] = useState('');
    const titleRef = useRef<HTMLInputElement>(null);
    const timeRef = useRef<HTMLInputElement>(null);
    const descRef = useRef<HTMLTextAreaElement>(null);
    const episodeTimeRef = useRef<HTMLInputElement>(null);
    const episodeTitleRef = useRef<HTMLInputElement>(null);
    const episodeChapterRef = useRef<HTMLInputElement>(null);

    const { token } = useAuth();
    const auth = useAuthHooks();

    const addChapterMutation = useMutation({
        mutationFn: (id: string) =>
            addChapter(
                { token, ...auth },
                {
                    time: timeRef.current!.value,
                    title: titleRef.current!.value,
                    description: descRef.current!.value,
                    id,
                }
            ),
        onSuccess: data => {
            titleRef.current!.value = '';
            timeRef.current!.value = '';
            setChapterId(data.id);
            toast.success('موفقیت آمیز');
        },
        onError: () => {
            toast.error('خطا در برقراری ارتباط');
        },
    });

    const editChapterMutation = useMutation({
        mutationFn: (idx: number) => {
            const chapter = chaptersState[idx];
            return editChapter({ token, ...auth }, chapter._id, {
                description: chapter.description,
                time: `${chapter.time.hour}:${chapter.time.min}`,
                title: chapter.title,
            });
        },
        onSuccess: () => {
            toast.success('موفقیت آمیز');
        },
        onError: () => {
            toast.error('خطا در برقراری ارتباط');
        },
    });

    const removeChapterMutation = useMutation({
        mutationFn: (chapterId: string) => removeChapter({ token, ...auth }, chapterId),
        onSuccess: () => {
            toast.success('موفقیت آمیز');
        },
        onError: () => {
            toast.error('خطا در برقراری ارتباط');
        },
    });

    const addEpisodeMutation = useMutation({
        mutationFn: (courseId: string) =>
            addEpisode(
                { token, ...auth },
                {
                    title: episodeTitleRef.current!.value,
                    courseID: courseId,
                    chapterID: episodeChapterRef.current!.value,
                    time: '',
                }
            ),
        onSuccess: () => {
            episodeTitleRef.current!.value = '';
            episodeChapterRef.current!.value = '';
            toast.success('موفقیت آمیز');
        },
        onError: () => {
            toast.error('خطا در برقراری ارتباط');
        },
    });

    const removeEpisodeMutation = useMutation({
        mutationFn: (episodeId: string) => removeEpisode({ token, ...auth }, episodeId),
        onSuccess: () => {
            toast.success('موفقیت آمیز');
        },
        onError: () => {
            toast.error('خطا در برقراری ارتباط');
        },
    });

    const handleChange = (key: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
        if (key === 'time') {
            const values = e.target.value.split(':');
            const updatedChapters = chaptersState.map(Chapter => {
                if (Chapter._id === id) {
                    return {
                        ...Chapter,
                        time: {
                            hour: values[0],
                            min: values[1],
                        },
                    };
                }
                return Chapter;
            });
            setChaptersState(updatedChapters);
        } else {
            const updatedChapters = chaptersState.map(Chapter => {
                if (Chapter._id === id) {
                    return { ...Chapter, [key]: e.target.value };
                }
                return Chapter;
            });
            setChaptersState(updatedChapters);
        }
    };
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <span>اضافه کردن فصل جدید</span>
                <input type='text' placeholder='تایتل' ref={titleRef} />
                <input type='text' placeholder='ساعت و دقیقه برای مثال به صورت 1:41' ref={timeRef} />
                <textarea name='' id='' placeholder='توضیحات' ref={descRef}></textarea>
                <button className='max-w-fit bg-pink' onClick={() => addChapterMutation.mutate(id)}>
                    اضافه
                </button>
                <span>ایدی فصل اضافه شده :</span>
                <span>{chapterId}</span>
            </div>
            <div className='flex flex-col gap-3'>
                <span>اضافه کردن قسمت جدید</span>
                <input type='text' placeholder='ایدی فصل مورد نظر' ref={episodeChapterRef} />
                <input type='text' placeholder='تایتل' ref={episodeTitleRef} />
                <input type='text' placeholder='ثانیه و دقیقه برای مثال به صورت 20:56' ref={episodeTimeRef} />
                <button className='max-w-fit bg-pink' onClick={() => addEpisodeMutation.mutate(id)}>
                    اضافه
                </button>
            </div>
            <span>لیست فصل ها</span>
            <ul className='flex flex-col gap-4'>
                {chaptersState?.map(({ _id, episodes, time, title, description }, idx) => (
                    <li key={_id} className='flex flex-col gap-4'>
                        <span>{_id}</span>
                        <div className='flex gap-4'>
                            <span>تایتل</span>
                            <input type='text' value={title} onChange={e => handleChange('title', e, _id)} />
                        </div>
                        <div>
                            <span>توضیحات</span>
                            <textarea value={description} onChange={e => handleChange('description', e, _id)} />
                        </div>
                        <div className='flex gap-4'>
                            <span>زمان</span>
                            <input type='text' defaultValue={`${time?.hour}:${time?.min}`} onChange={e => handleChange('time', e, _id)} />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <span>قسمت ها : </span>
                            <ul className='flex flex-col gap-4'>
                                {episodes?.map(({ _id, title, time }) => (
                                    <li key={_id} className='flex flex-col gap-3 border-y border-black py-2'>
                                        <div className='flex flex-col gap-2'>
                                            <span>تایتل : {title} </span>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <span>زمان : {time?.min + ':' + time?.seconds} </span>
                                        </div>
                                        <button
                                            className='bg-yellow max-w-fit'
                                            onClick={() => {
                                                removeEpisodeMutation.mutate(_id);
                                            }}>
                                            حذف قسمت
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex gap-4'>
                            <button
                                className='max-w-fit bg-pink'
                                onClick={() => {
                                    editChapterMutation.mutate(idx);
                                }}>
                                تغییر فصل
                            </button>
                            <button className='max-w-fit bg-red-500 text-white' onClick={() => removeChapterMutation.mutate(_id)}>
                                حذف فصل
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageChapters;
