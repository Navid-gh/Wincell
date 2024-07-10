import { useState } from "react";
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
  ConfirmFn: (btnDisabled: booleanStateHandleType) => void;
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
    ConfirmFn(setConfirmDisabled);
  };

  const handleResend = () => {
    setResendDisabled(true);
    resendFn(setResendDisabled);
  };

  return (
    <div
      className={cn("flex flex-col gap-4", show ? "animate-fade-in" : "hidden")}
    >
      <InputOTP
        maxLength={4}
        value={value}
        onChange={(value) => setValue(value)}
        containerClassName="flex items-center justify-center"
        dir="ltr"
      >
        <InputOTPGroup dir="ltr">
          <InputOTPSlot className="border-main-secondary-text/70" index={0} />
          <InputOTPSlot className="border-main-secondary-text/70" index={1} />
          <InputOTPSlot className="border-main-secondary-text/70" index={2} />
          <InputOTPSlot className="border-main-secondary-text/70" index={3} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? <>کد تایید خود را وارد کنید</> : <>{value}</>}
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
