import { useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./UI/OTP";
import { cn } from "../utils/lib/cn";
import Button from "./UI/Button";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { booleanStateHandleType } from "../types/stateFnsTypes";

type Props = {
  show: boolean;
  backPageFn: () => void;
  countDown: number;
  resendFn: (btnDisabled: booleanStateHandleType) => void;
  ConfirmFn: (otp: string, btnDisabled: booleanStateHandleType) => void;
};

export function ConfirmOTP({
  show,
  countDown,
  resendFn,
  ConfirmFn,
  backPageFn,
}: Props) {
  const [confirmDisabled, setConfirmDisabled] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [value, setValue] = useState("");

  const handleConfirm = () => {
    setConfirmDisabled(true);
    ConfirmFn(value, setConfirmDisabled);
  };

  const handleResend = () => {
    setResendDisabled(true);
    resendFn(setResendDisabled);
  };

  const handleOtpValue = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    if (value && value.length === 5) handleConfirm();
  }, [value]);

  return (
    <div
      className={cn("flex flex-col gap-4", show ? "animate-fade-in" : "hidden")}
    >
      <InputOTP
        maxLength={5}
        value={value}
        onChange={(value) => handleOtpValue(value)}
        containerClassName="flex items-center justify-center"
        dir="ltr"
      >
        <InputOTPGroup dir="ltr">
          <InputOTPSlot className="border-main-secondary-text/70" index={0} />
          <InputOTPSlot className="border-main-secondary-text/70" index={1} />
          <InputOTPSlot className="border-main-secondary-text/70" index={2} />
          <InputOTPSlot className="border-main-secondary-text/70" index={3} />
          <InputOTPSlot className="border-main-secondary-text/70" index={4} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>کد تایید خود را وارد کنید</>
        ) : (
          <>{toPersianNumbers(value)}</>
        )}
      </div>
      <Button
        intent={"tertiary"}
        size={"base"}
        onClick={handleConfirm}
        disabled={confirmDisabled}
        className="py-4"
      >
        ورود
      </Button>
      <div className="flex justify-between gap-2 flex-wrap">
        <Button
          intent={"textLike"}
          size="fit"
          onClick={handleResend}
          disabled={resendDisabled}
          className="bg-transparent p-0 pb-1"
        >
          {countDown ? (
            `${toPersianNumbers(countDown)} ثانیه`
          ) : (
            <span onClick={handleResend}>ارسال مجدد</span>
          )}
        </Button>
        <Button
          intent={"textLike"}
          size="fit"
          className="bg-transparent p-0 pb-1"
          onClick={backPageFn}
        >
          برگشت
        </Button>
      </div>
    </div>
  );
}
