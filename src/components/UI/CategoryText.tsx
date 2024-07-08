import { textBody3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";

const CategoryText = ({
  children,
  className,
}: {
  children: string | JSX.Element;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "max-w-fit text-main-secondary-text/70 border border-main-secondary-text/70 p-1 rounded-small",
        textBody3,
        className
      )}
    >
      {children}
    </span>
  );
};

export default CategoryText;
