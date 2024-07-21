import { bgTextFull, textTitle4 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import User from "../../components/UI/icons/User";
import Input from "../../components/UI/Input";
import { useRef } from "react";
import Button from "../../components/UI/Button";
import inputValidator from "../../utils/inputValidator";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { data } = useAuth();
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const lastNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleUpdate = () => {
    const firstNameMsg = inputValidator(firstNameRef.current?.value);
    const lastNameMsg = inputValidator(lastNameRef.current?.value);
    const emailMsg = inputValidator(emailRef.current?.value, "email");
    if (firstNameMsg || lastNameMsg || emailMsg) {
      toast.error("لطفا اطلاعات را به درستی وارد کنید");
      return;
    }
    if (
      firstNameRef.current?.value === data.first_name &&
      lastNameRef.current?.value === data.last_name &&
      emailRef.current?.value === data.email
    ) {
      toast.error("تغییری برای اطلاعات یافت نشد");
      return;
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn(
          "bg-main-secondary-bg border border-main-primary-text",
          bgTextFull
        )}
      >
        <User className="w-4 h-4" />
        <h1 className={textTitle4}>پروفایل</h1>
      </div>
      <div className="flex gap-2 flex-col">
        <Input
          id="first_name"
          label="نام"
          intent={"secondary"}
          inputSize="base"
          ref={firstNameRef}
          defaultValue={data.first_name}
          className="w-[48%] min-w-40 max-w-80"
        />
        <Input
          id="last_name"
          label="نام خانوادگی"
          intent={"secondary"}
          inputSize="base"
          ref={lastNameRef}
          defaultValue={data.last_name}
          className="w-[48%] min-w-40 max-w-80"
        />
        <Input
          id="email"
          label="ایمیل"
          intent={"secondary"}
          inputSize="base"
          ref={emailRef}
          defaultValue={data.email}
          className="w-[48%] min-w-40 max-w-80"
        />
      </div>
      <Button
        intent="primary"
        size="fit"
        className="px-16"
        onClick={handleUpdate}
      >
        تایید
      </Button>
    </div>
  );
};

export default Profile;
