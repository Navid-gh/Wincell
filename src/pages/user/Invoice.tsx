import { textBody1, textBody1Bold, textBody2, textTitle3 } from '../../constants/styles';
import { toPersianNumbers } from '../../utils/toPersianNumbers';
import { toPersianDate } from '../../utils/toPersianDate';
import TableWrapper from '../../components/UI/TableWrapper';
import { TableRow, TableCell } from '../../components/UI/Table';
import { cn } from '../../utils/lib/cn';
import { useAuth, useAuthHooks } from '../../hooks/useAuth';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { useQuery } from '@tanstack/react-query';
import { orderDetail } from '../../api/basket';
import ImageWrapper from '../../components/UI/ImageWrapper';
import WithLoaderAndError from '../../components/WithLoaderAndError';

type invoiceData = {
    image: string;
    title: string;
    amount: number;
    paymentDate: string;
    invoiceNumber: number;
};

const Invoice = () => {
    const { token } = useAuth();
    const authHooks = useAuthHooks();
    const basketData = useAppSelector(state => state.basket);
    const basketIds = basketData.productsId.join(',');
    const { data, isError, isLoading, error } = useQuery({
        queryKey: ['orderDetail', basketIds],
        queryFn: () => orderDetail({ token, ...authHooks }, basketIds),
    });
    const tableRows =
        data &&
        data.listAuthority &&
        data.listAuthority.map((product: invoiceData, index: number) => (
            <TableRow key={index}>
                <TableCell className='text-right'>{index + 1}</TableCell>
                <TableCell className='text-center flex items-center justify-center gap-2'>
                    <ImageWrapper className='w-12 h-10 rounded-small border' src={product.image} alt={product.title} />
                    <span className={textBody2}>{product.title}</span>
                </TableCell>
                <TableCell className='text-center'>
                    <span className={textBody2}>{toPersianNumbers(product.amount, false)} تومان</span>
                </TableCell>
                <TableCell className='text-center'></TableCell>
            </TableRow>
        ));

    const totalAmount =
        data && data.listAuthority
            ? data.listAuthority.reduce((total: number, product: invoiceData) => {
                  return total + product.amount;
              }, 0)
            : 0;

    return (
        <WithLoaderAndError {...{ data, isError, isLoading, error }}>
            <div className='flex flex-col gap-4 max-w-4xl'>
                <h1 className={cn(textTitle3, 'rounded-small bg-main-secondary-bg border border-main-primary-text py-3 px-2')}>
                    جزئیات فاکتور #{data.listAuthority.invoiceNumber}
                </h1>
                {data && data.listAuthority && (
                    <div className='flex flex-col gap-2'>
                        <h2 className={cn(textBody2, 'px-2')}>تاریخ خرید: {toPersianDate(data.listAuthority.paymentDate, false)}</h2>

                        <TableWrapper caption='محصولات خریداری شده' headers={['دوره', 'قیمت']} tableRows={tableRows} title='جدول محصولات' />
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-2'>
                                <span className={textBody1Bold}>جمع کل:</span>
                                <span className={textBody1}>{toPersianNumbers(totalAmount, false)} تومان</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </WithLoaderAndError>
    );
};

export default Invoice;
