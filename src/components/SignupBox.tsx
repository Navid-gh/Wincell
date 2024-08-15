import { useRef, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { ConfirmOTP } from "./ConfirmOTP";
import { cn } from "../utils/lib/cn";
import { useCountdown } from "../hooks/useCountdown";
import { booleanStateHandleType } from "../types/stateFnsTypes";
import toast from "react-hot-toast";
import inputValidator from "../utils/inputValidator";
import { register, registerOtp, resetCode } from "../api/auth";
import { useQueryClient } from "@tanstack/react-query";
import { setCookie } from "../utils/cookie";
import axios from "axios";
import { Roles } from "../types/auth";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { logIn } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const SignupBox = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const Navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { countDown, startCounter } = useCountdown(120);
  const handleSendOtp = async (
    btnStateHandler: booleanStateHandleType,
    isReset?: boolean
  ) => {
    const phoneMsg = inputValidator(phoneRef.current?.value, "phone");
    if (phoneMsg) {
      toast.error(phoneMsg);
      return;
    }
    const loader = toast.loading("در حال ارسال کد");
    try {
      isReset
        ? await resetCode(phoneRef.current!.value)
        : await registerOtp(phoneRef.current!.value);
      setShowOtp(true);
      startCounter();
      btnStateHandler(false);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error("خطا در ارسال کد");
    } finally {
      toast.dismiss(loader);
    }
  };
  const confirmSignup = async (
    Otp: string,
    btnStateHandler: booleanStateHandleType
  ) => {
    const codeMsg = inputValidator(Otp, "number");
    if (codeMsg) {
      toast.error(codeMsg);
      return;
    }
    const loader = toast.loading("در حال ارسال اطلاعات");
    try {
      const res = await register({
        first_name: firstNameRef.current!.value,
        last_name: lastNameRef.current!.value,
        email: emailRef.current!.value,
        phone: phoneRef.current!.value,
        code: Otp,
      });
      setCookie("win_token", res.refreshToken, {
        path: "/",
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        secure: true,
        sameSite: "lax",
      });
      dispatch(
        logIn({
          role: res.user.Role[0] as Roles,
          token: res.token,
          data: res.user,
        })
      );
      queryClient.invalidateQueries();
      Navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error("خطا در برقراری ارتباط");
    } finally {
      toast.dismiss(loader);
      btnStateHandler(false);
    }
  };
  const handleBack = () => {
    setShowOtp(false);
  };
  return (
    <>
      <ConfirmOTP
        show={showOtp}
        countDown={countDown}
        resendFn={(handler: booleanStateHandleType) =>
          handleSendOtp(handler, true)
        }
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
          ref={firstNameRef}
        />
        <Input
          id="last_name"
          label="نام خانوادگی"
          intent={"primary"}
          inputSize="base"
          ref={lastNameRef}
        />
        <Input
          id="email"
          label="ایمیل"
          intent={"primary"}
          inputSize="base"
          ref={emailRef}
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
