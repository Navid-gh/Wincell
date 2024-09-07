import { useNavigate } from 'react-router-dom';
import { cn } from '../../utils/lib/cn';
import Button from '../../components/UI/Button';
import { textBody1, textBody1Bold } from '../../constants/styles';

const PaymentFailed = () => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-main-primary-bg p-4">
            <div className="flex flex-col items-center gap-5 bg-main-secondary-bg rounded-small p-6 max-w-md w-full text-center">
                <h1 className={cn(
                    textBody1Bold,
                    'text-red-600'
                )}>
                    پرداخت ناموفق بود!
                </h1>
                <p className={cn(textBody1)}>
                    متاسفانه مشکلی در پردازش پرداخت شما به وجود آمده است. لطفاً دوباره تلاش کنید.
                </p>
                <Button
                    intent='primary'
                    size='fit'
                    onClick={() => navigate('/basket')}
                >
                    تلاش مجدد
                </Button>
            </div>
        </div>
    );
};

export default PaymentFailed;
