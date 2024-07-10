import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../utils/lib/cn";
import {
  hoverShadowEffect,
  mainBorder,
  textButtonPrimary,
} from "../../constants/styles";

const ButtonStyles = cva("border-0 outline-0 font-body cursor-pointer", {
  variants: {
    intent: {
      primary:
        "bg-main-green-300 text-main-black hover:bg-main-green-100 " +
        mainBorder,
      secondary: "bg-transparent text-main-primary-text",
      tertiary:
        "bg-main-black text-main-green-300 border-2 border-main-green-300",
      textLike: "bg-transparent text-main-primary-text",
    },
    size: {
      base: ["px-8", "py-2", "rounded-small", "w-full", "h-full"],
      fit: ["px-8", "py-2", "rounded-small", "w-fit"],
    },
    defaultVariants: {
      intent: "primary",
      size: "base",
    },
  },
});

interface ButtonProps
  extends VariantProps<typeof ButtonStyles>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
}

const Button = ({ intent, size, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        intent !== "textLike" && hoverShadowEffect,
        textButtonPrimary,
        ButtonStyles({ intent, size }),
        className
      )}
      {...props}
    ></button>
  );
};

export default Button;
