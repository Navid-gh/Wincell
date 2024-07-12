import { useRef, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { ConfirmOTP } from "./ConfirmOTP";
import { cn } from "../utils/lib/cn";
import { useCountdown } from "../hooks/useCountdown";
import { booleanStateHandleType } from "../types/stateFnsTypes";

const SignupBox = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const { countDown, startCounter } = useCountdown(120);
  const handleSendOtp = (btnStateHandler: booleanStateHandleType) => {
    setShowOtp(true);
    startCounter();
  };
  const confirmSignup = (
    Otp: string,
    btnStateHandler: booleanStateHandleType
  ) => {
    btnStateHandler(false);
  };
  const handleBack = () => {
    setShowOtp(false);
  };
  return (
    <>
      <ConfirmOTP
        show={showOtp}
        countDown={countDown}
        resendFn={(handler: booleanStateHandleType) => handleSendOtp(handler)}
        ConfirmFn={(otp: string, handler: booleanStateHandleType) =>
          confirmSignup(otp, handler)
        }
        backPageFn={handleBack}
      />
      <div
        className={cn(
          "hidden flex-col gap-2",
          !showOtp && "animate-fade-in flex"
        )}
      >
        <h1>ثبت نام</h1>
        <Input
          id="first_name"
          label="نام"
          intent={"primary"}
          inputSize="base"
          ref={phoneRef}
        />
        <Input
          id="last_name"
          label="نام خانوادگی"
          intent={"primary"}
          inputSize="base"
          ref={phoneRef}
        />
        <Input
          id="phone"
          label="شماره موبایل"
          intent={"primary"}
          inputSize="base"
          ref={phoneRef}
        />
        <Button
          intent={"tertiary"}
          size={"base"}
          className="py-4"
          disabled={btnDisabled}
          onClick={() => handleSendOtp(setBtnDisabled)}
        >
          دریافت کد
        </Button>
      </div>
    </>
  );
};

export default SignupBox;
