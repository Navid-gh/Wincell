import { textBody1, textBody1Bold, textBody2, textTitle3 } from '../../constants/styles';
import { toPersianNumbers } from '../../utils/toPersianNumbers';
import { toPersianDate } from '../../utils/toPersianDate';
import TableWrapper from '../../components/UI/TableWrapper';
import { TableRow, TableCell } from '../../components/UI/Table';
import { cn } from '../../utils/lib/cn';
import { useAuth, useAuthHooks } from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { orderDetail } from '../../api/basket';
import ImageWrapper from '../../components/UI/ImageWrapper';
import WithLoaderAndError from '../../components/WithLoaderAndError';
import IconWrapper from '../../components/UI/IconWrapper';
import Copy from '../../components/UI/icons/Copy';
import toast from 'react-hot-toast';
import { Course } from '../../types/apiTypes';
import { useNavigate, useParams } from 'react-router-dom';

const Invoice = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { token } = useAuth();
    const authHooks = useAuthHooks();
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['orderDetail', id],
        queryFn: () => orderDetail({ token, ...authHooks }, id!)
    });

    const handleCopyCode = () => {
        navigator.clipboard.writeText(toPersianNumbers(data?.listAuthority.spotPlayerID, false));
        toast.success("کد با موفقیت کپی شد");
    };

    const tableRows =
        data &&
        data.listAuthority &&
        data.listAuthority.map((product: Course, index: number) => {
            return (
                <TableRow
                    key={index}
                >
                    <TableCell className='text-right'>
                        {index + 1}
                    </TableCell>
                    <TableCell className='text-center'>
                        <div className='flex justify-center items-center gap-2'>
                            <ImageWrapper className="w-[3.9rem] h-[2.8rem] object-cover"
                                src={product?.images[0]}
                                alt={product?.title}
                            />
                            <span className={textBody2}>
                                {product?.title}
                            </span>
                        </div>
                    </TableCell>
                    <TableCell className='text-center'>
                        <span className={textBody2}>
                            {toPersianNumbers(product?.priceAfterDiscount, false)} تومان
                        </span>
                    </TableCell>
                    <TableCell>
                        <div className='flex justify-center items-center gap-1'>
                            <span className={cn(
                                textBody2,
                                'w-11 truncate text-center'
                            )}>
                                {toPersianNumbers((product?.spotPlayerID), false)}
                            </span>
                            <IconWrapper onClick={handleCopyCode}>
                                <Copy className='w-4 dark:invert' />
                            </IconWrapper>
                        </div>
                    </TableCell>
                </TableRow>
            )
        });

    const totalAmount =
        data && data.listAuthority
            ? data.listAuthority.reduce((total: number, product: Course) => {
                return total + product?.priceAfterDiscount;
            }, 0)
            : 0;

    if (id === undefined) {
        navigate('/');
        return null;
    }

    return (
        <WithLoaderAndError {...{ data, isError, isLoading, error }}>
            <div className='flex flex-col gap-4 max-w-4xl'>
                <h1 className={cn(
                    textTitle3,
                    'rounded-small bg-main-secondary-bg border border-main-primary-text py-3 px-2'
                )}>
                    جزئیات فاکتور #{data?.listAuthority.invoiceNumber}
                </h1>
                {data && data.listAuthority && (
                    <div className='flex flex-col gap-2'>
                        <h2 className={cn(
                            textBody2,
                            'px-2'
                        )}>
                            تاریخ خرید: {toPersianDate(data?.listAuthority.paymentDate, false)}
                        </h2>
                        <TableWrapper
                            caption='محصولات خریداری شده'
                            headers={['دوره', 'قیمت']}
                            tableRows={tableRows}
                            title='جدول محصولات'
                        />
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2'>
                                <span className={textBody1Bold}>جمع کل:</span>
                                <span className={textBody1}>
                                    {toPersianNumbers(totalAmount, false)} تومان
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </WithLoaderAndError>
    );
};

export default Invoice;
