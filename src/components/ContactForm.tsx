import { useRef, useState } from "react";
import { cn } from "../utils/lib/cn";
import { bgProductPage } from "../constants/styles";
import Input from "./UI/Input";
import Textarea from "./UI/Textarea";
import Button from "./UI/Button";
import inputValidator from "../utils/inputValidator";
import toast from "react-hot-toast";
import { addTicket } from "../api";

const ContactForm = () => {
  const [pending, setPending] = useState(false);
  const phoneRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const msgRef = useRef<HTMLTextAreaElement>(null);

  const submitTicket = async () => {
    const phoneMsg = inputValidator(phoneRef.current?.value, "phone");
    const titleMsg = inputValidator(titleRef.current?.value);
    const msgMsg = inputValidator(msgRef.current?.value);
    if (msgMsg || phoneMsg || titleMsg) {
      toast.error(phoneMsg || titleMsg || msgMsg);
      return;
    }
    const load = toast.loading("در حال ارسال اطلاعات");
    setPending(true);
    try {
      await addTicket({
        phone: phoneRef.current!.value,
        title: titleRef.current!.value,
        desc: msgRef.current!.value,
      });
      toast.success("پیام شما با موفقیت ارسال شد");
    } catch (error) {
      console.log(error);
      toast.error("خطا در ارسال اطلاعات");
    } finally {
      toast.dismiss(load);
      setPending(false);
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
          id="title"
          label="عنوان"
          intent={"primary"}
          inputSize="base"
          ref={titleRef}
        />
        <Textarea
          id="phone"
          placeholder="پیام خودرا بنویسید..."
          intent={"primary"}
          inputSize="base"
          ref={msgRef}
          className="bg-main-green-50 dark:text-main-black"
        />
        <Button
          intent={"tertiary"}
          size={"base"}
          className="h-auto py-3"
          onClick={submitTicket}
          disabled={pending}
        >
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
