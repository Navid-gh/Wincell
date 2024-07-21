import { forwardRef, memo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../utils/lib/cn";
import {
  mainBorder,
  textInputTitle,
  textPlaceholder,
} from "../../constants/styles";

const InputStyles = cva("border-0 outline-0 font-body", {
  variants: {
    intent: {
      primary: "bg-main-green-50 text-main-black cursor-text",
      secondary: "bg-main-secondary-bg text-main-primary-text",
    },
    inputSize: {
      base: "w-full py-1 px-6 rounded-small",
    },
    defaultVariants: {
      intent: "primary",
      inputSize: "base",
    },
  },
});

interface InputProps
  extends VariantProps<typeof InputStyles>,
    InputHTMLAttributes<HTMLInputElement> {
  placeHolder?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ intent, placeHolder, inputSize, id, label, className, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          "flex flex-col w-full gap-2 relative",
          InputStyles({ intent, inputSize }),
          textPlaceholder,
          mainBorder,
          className
        )}
      >
        {placeHolder ? null : (
          <span className={cn("text-main-gray-200", textInputTitle)}>
            {label}
          </span>
        )}
        <input
          className="border-0 outline-0 bg-transparent"
          id={id}
          placeholder={placeHolder}
          ref={ref}
          {...props}
        />
      </label>
    );
  }
);

export default memo(Input);
