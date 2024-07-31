import { useRef } from "react";
import { cn } from "../utils/lib/cn";
import { bgProductPage } from "../constants/styles";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";
import inputValidator from "../utils/inputValidator";
import toast from "react-hot-toast";

const ContactForm = () => {
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const submitTicket = () => {
    const phoneMsg = inputValidator(phoneRef.current?.value);
    const emailMsg = inputValidator(emailRef.current?.value);
    const msgMsg = inputValidator(msgRef.current?.value);
    if (msgMsg || phoneMsg || emailMsg) {
      toast.error(phoneMsg || emailMsg || msgMsg);
      return;
    }
    const load = toast.loading("در حال ارسال اطلاعات");
    try {
      //
    } catch (error) {
      console.log(error);
      toast.error("");
    } finally {
      toast.dismiss(load);
    }
  };
  return (
    <div className="flex gap-2 flex-wrap">
      <img
        src="/public/images/contact.svg"
        alt="contact icon"
        className="max-w-md flex-1"
      />
      <div
        className={cn("flex flex-col gap-2 flex-1 self-start", bgProductPage)}
      >
        <Input
          id="phone"
          label="شماره موبایل"
          intent={"primary"}
          inputSize="base"
          ref={phoneRef}
        />
        <Input
          id="email"
          label="ایمیل"
          intent={"primary"}
          inputSize="base"
          ref={emailRef}
        />
        <Textarea
          id="phone"
          placeholder="پیام خودرا بنویسید..."
          intent={"primary"}
          inputSize="base"
          ref={msgRef}
          className="bg-main-green-50"
        />
        <Button
          intent={"tertiary"}
          size={"base"}
          className="h-auto"
          onClick={submitTicket}
        >
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
