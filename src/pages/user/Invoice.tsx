import { useParams } from "react-router-dom";
import { toPersianNumbers } from "../../utils/toPersianNumbers";
import TableWrapper from "../../components/UI/TableWrapper";
import { TableRow, TableCell } from "../../components/UI/Table";
import { textBody1, textBody1Bold, textBody2, textTitle2, textTitle3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";

const Invoice = () => {

    const { id } = useParams();

    // const { token } = useAuth();
    // const authHooks = useAuthHooks();
    // const basketData = useAppSelector((state) => state.basket);
    // const basketIds = basketData.productsId.join(',');
    // const { data, isError, isLoading, error } = useQuery({
    //   queryKey: ["orderDetail", basketIds],
    //   queryFn: () => orderDetail({ token, ...authHooks }, basketIds),
    // });

    const invoiceData = {
        date: "1402/01/15",
        products: [
            { id: 1, name: "محصول 1", price: 100000, result: 'موفق' },
            { id: 2, name: "محصول 2", price: 200000, result: 'موفق' },
            { id: 3, name: "محصول 3", price: 300000, result: 'موفق' },
        ],
        total: 600000,
        isPaid: true,
    };

    const tableRows = invoiceData.products.map((product, index) => (
        <TableRow key={index}>
            <TableCell className="text-right">{index + 1}</TableCell>
            <TableCell className="text-center">{product.name}</TableCell>
            <TableCell className="text-center">{toPersianNumbers(product.price)} تومان</TableCell>
            <TableCell className="text-center">{product.result}</TableCell>
        </TableRow >
    ));

    return (
        // <WithLoaderAndError {...{ data, isError, isLoading, error }}>
        <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className={cn(
                textTitle3,
                'rounded-small bg-main-secondary-bg border border-main-primary-text py-3 px-2'
            )}>
                جزئیات فاکتور #{id}
            </h1>

            {invoiceData && (
                <div className="flex flex-col gap-2">
                    <h2 className={cn(
                        textBody2, 'px-2'
                    )}>
                        تاریخ خرید: {toPersianNumbers(invoiceData.date)}
                    </h2>

                    <TableWrapper
                        caption="محصولات خریداری شده"
                        headers={["نام دوره", "قیمت"]}
                        tableRows={tableRows}
                        title="جدول محصولات"
                    />
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <span className={textBody1Bold}>جمع کل:</span>
                            <span className={textBody1}>{toPersianNumbers(invoiceData.total)} تومان</span>
                        </div>
                        <div className="flex gap-2">
                            <span className={textBody1Bold}>وضعیت پرداخت:</span>
                            <span className={textBody1}>{invoiceData.isPaid ? 'پرداخت شده' : 'پرداخت نشده'}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
        // </WithLoaderAndError>
    );
};

export default Invoice;