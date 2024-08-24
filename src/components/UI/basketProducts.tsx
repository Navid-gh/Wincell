import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from './Table';
import { textBody1Bold, textBody2, textTitle4 } from '../../constants/styles';
import Trash from './icons/Trash';
import ImageWrapper from './ImageWrapper';
import { cn } from '../../utils/lib/cn';
import IconWrapper from './IconWrapper';
import { toPersianNumbers } from '../../utils/toPersianNumbers';
import { Course } from '../../types/apiTypes';
import { useNavigate, useParams } from 'react-router-dom';
import Basket from './icons/Basket';

type Props = {
    listCourse: Course[];
    handleDeleteProduct: Function;
};

const BasketProducts = ({ listCourse, handleDeleteProduct }: Props) => {
    const navigate = useNavigate();
    const { id, slug } = useParams();

    const headers = ['دوره', 'قیمت'];

    const tableRows = [
        listCourse &&
            listCourse.map(course => {
                return (
                    <TableRow key={course._id} className=''>
                        <TableCell className='flex gap-3 items-center text-center px-7 article:px-4'>
                            <div
                                onClick={() => navigate(`/course/${id}/${slug}`)}
                                className='relative w-[3.9rem] h-[2.8rem] cursor-pointer '>
                                <ImageWrapper
                                    className='border-none rounded-[0.5rem] w-full h-full'
                                    src={course.images[0]}
                                    alt={course.title}
                                />
                                <div className='absolute inset-1.5 bg-gradient-to-l rounded-small from-transparent to-black opacity-90 mix-blend-overlay'></div>
                            </div>
                            <span className={cn(textBody2, 'text-main-primary-text')}>{course.title}</span>
                        </TableCell>
                        <TableCell className={cn(textBody2, 'text-main-primary-text text-center px-7 article:px-4')}>
                            {toPersianNumbers(course.price, false)} تومان
                        </TableCell>
                        <TableCell className='px-7 article:px-4 pl-11 article:pl-4'>
                            <IconWrapper
                                onClick={() => handleDeleteProduct(course._id)}
                                className='flex border border-main-primary-text border-main-gray-50'>
                                <Trash className='dark:invert' />
                            </IconWrapper>
                        </TableCell>
                    </TableRow>
                );
            }),
    ];

    return (
<<<<<<< HEAD
        <div className="flex flex-col bg-main-secondary-bg rounded-small">
            {
                listCourse.length === 0 ?
                    <div className="flex items-center justify-center gap-2 p-7 article:p-4 h-[9.1rem] w-[31.5rem] article:w-[17.5rem]">
                        <Basket className="w-5 h-5 dark:invert" />
                        <p className={textTitle4}>سبد خرید شما خالی است</p>
                    </div> :
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {headers.map((head, idx) => (
                                    <TableHead key={idx} className={cn(
                                        textBody1Bold,
                                        'py-[1.4375rem] article:py-[0.9375rem] px-12 article:px-4 text-right'
                                    )}>
                                        {head}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableRows}
                        </TableBody>
                    </Table>
            }
=======
        <div className='flex flex-col bg-main-secondary-bg rounded-small'>
            {listCourse.length === 0 ? (
                <div className='flex items-center gap-2 p-7 article:p-4 min-h-32'>
                    <Basket className='w-5 h-5 dark:invert' />
                    <p className={textTitle4}>سبد خرید شما خالی است</p>
                </div>
            ) : (
                <Table className='min-h-32'>
                    <TableHeader>
                        <TableRow>
                            {headers.map((head, idx) => (
                                <TableHead
                                    key={idx}
                                    className={cn(textBody1Bold, 'py-[1.4375rem] article:py-[0.9375rem] px-12 article:px-4 text-right')}>
                                    {head}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>{tableRows}</TableBody>
                </Table>
            )}
>>>>>>> 2533eafed7fac7d5e2f30c208f3ad2dfafd5d4d2
        </div>
    );
};

export default BasketProducts;
