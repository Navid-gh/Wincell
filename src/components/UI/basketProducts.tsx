import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
    TableCell
} from './Table';
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
    const { id } = useParams();

    const headers = ['دوره', 'قیمت'];

    const tableRows = [
        listCourse &&
        listCourse.map(course => {
            return (
                <TableRow
                    key={course._id}
                >
                    <TableCell className='flex gap-3 items-center text-center article:px-4'>
                        <div
                            onClick={() => navigate(`/course/${id}`)}
                            className='relative w-[3.9rem] h-[2.8rem] cursor-pointer'>
                            <ImageWrapper
                                className='border-none rounded-small w-full h-full'
                                src={course.images[0]}
                                alt={course.title}
                            />
                            <div className='absolute inset-1.5 bg-gradient-to-l rounded-small from-transparent to-black opacity-90 mix-blend-overlay'></div>
                        </div>
                        <span className={cn(
                            textBody2,
                            'text-main-primary-text'
                        )}
                        >
                            {course.title}
                        </span>
                    </TableCell>
                    <TableCell className={cn(
                        textBody2,
                        'text-main-primary-text article:px-4'
                    )}
                    >
                        {toPersianNumbers(course.price, false)} تومان
                    </TableCell>
                    <TableCell>
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
        <div className="flex-grow w-[60%] max-w-[40rem] flex-col bg-main-secondary-bg rounded-small">
            {
                listCourse.length === 0 ?
                    <div className="flex items-center justify-center gap-2 p-11">
                        <Basket className="w-5 h-5 dark:invert" />
                        <p className={textTitle4}>سبد خرید شما خالی است</p>
                    </div> :
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {headers.map((head, i) => (
                                    <TableHead
                                        key={i}
                                        className={cn(
                                            textBody1Bold,
                                            'py-[1.4375rem] article:py-[0.9375rem] px-10 article:px-4 text-right'
                                        )}
                                    >
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
        </div>
    );
};

export default BasketProducts;
