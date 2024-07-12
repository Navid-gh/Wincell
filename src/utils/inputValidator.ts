import { string } from "zod";

const inputValidator = (
  value: string | undefined,
  type?: "phone" | "email" | "number"
) => {
  value = String(value);
  if (value === "" || value == null) {
    return "لطفا بخش های لازم را پر کنید";
  }
  if (type) {
    if (type === "phone") {
      const regexSchema = string().regex(/^\d+$/);
      const mySchema = string().length(11);
      if (
        !mySchema.safeParse(value).success ||
        !regexSchema.safeParse(value).success
      )
        return "شماره تلفن باید یازده رقم باشد";
    } else if (type === "email") {
      const mySchema = string().email();
      if (!mySchema.safeParse(value).success)
        return "ایمیل وارد شده صحیح نمیباشد";
    } else if (type === "number") {
      const regexSchema = string().regex(/^\d+$/);
      const mySchema = string().min(3).max(6);
      if (
        !mySchema.safeParse(value).success ||
        !regexSchema.safeParse(value).success
      )
        return "کد را به صورت عدد وارد کنید";
    }
  }
  return null;
};

export default inputValidator;
