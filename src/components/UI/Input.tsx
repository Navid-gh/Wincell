import { forwardRef, memo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../utils/lib/cn";
import { mainBorder, textPlaceholder } from "../../constants/styles";

const InputStyles = cva("border-0 outline-0 font-body", {
  variants: {
    intent: {
      search: "bg-transparent text-main-primary-text",
    },
    inputSize: {
      primary: "w-full py-1 px-6 rounded-big",
    },
    defaultVariants: {
      intent: "primary",
      inputSize: "primary",
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
      <div className="flex flex-col w-full gap-2 relative">
        {placeHolder ? null : <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          className={cn(
            InputStyles({ intent, inputSize }),
            mainBorder,
            textPlaceholder,
            className
          )}
          placeholder={placeHolder}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default memo(Input);
