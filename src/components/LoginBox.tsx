import { useRef, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { ConfirmOTP } from "./ConfirmOTP";
import { cn } from "../utils/lib/cn";
import { useCountdown } from "../hooks/useCountdown";
import { booleanStateHandleType } from "../types/stateFnsTypes";
import { setCookie } from "../utils/cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { logIn } from "../redux/userSlice";
import inputValidator from "../utils/inputValidator";
import toast from "react-hot-toast";
import { checkOtp, login, resetCode } from "../api/auth";
import axios from "axios";
import { Roles } from "../types/auth";

const LoginBox = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const { countDown, startCounter } = useCountdown(120);
  const Navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";
  const dispatch = useAppDispatch();
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
        : await login(phoneRef.current!.value);
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
  const confirmLogin = async (
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
      const res = await checkOtp(phoneRef.current!.value, Otp);
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
      Navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error("خطا در برقراری ارتباط");
    } finally {
      btnStateHandler(false);
      toast.dismiss(loader);
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
        resendFn={(handler: booleanStateHandleType) => handleSendOtp(handler)}
        ConfirmFn={(otp: string, handler: booleanStateHandleType) =>
          confirmLogin(otp, handler)
        }
        backPageFn={handleBack}
      />
      <div
        className={cn(
          "hidden flex-col gap-2",
          !showOtp && "animate-fade-in flex"
        )}
      >
        <h1>ورود به حساب کاربری</h1>
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

export default LoginBox;
