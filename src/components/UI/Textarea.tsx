import { forwardRef, memo } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../../utils/lib/cn";
import { mainBorder, textPlaceholder } from "../../constants/styles";

const TextStyles = cva("border-0 outline-0 font-body", {
  variants: {
    intent: {
      primary: "bg-main-primary-bg text-main-primary-text resize-none",
    },
    inputSize: {
      base: "w-full py-1 px-6 rounded-small min-h-40",
    },
    defaultVariants: {
      intent: "primary",
      inputSize: "base",
    },
  },
});

interface TextProps
  extends VariantProps<typeof TextStyles>,
    InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Input = forwardRef<HTMLTextAreaElement, TextProps>(
  ({ intent, placeholder, inputSize, id, label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-2 relative">
        {placeholder ? null : <label htmlFor={id}>{label}</label>}
        <textarea
          id={id}
          className={cn(
            TextStyles({ intent, inputSize }),
            mainBorder,
            textPlaceholder,
            className
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        ></textarea>
      </div>
    );
  }
);

export default memo(Input);
