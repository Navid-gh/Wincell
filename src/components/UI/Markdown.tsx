import MarkdownLib from "markdown-to-jsx";
import { bgProductPage, bgTextColor, textTitle3 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import { forwardRef } from "react";

type Props = {
  title?: string;
  text: string;
  sectionId?: string;
};

const Markdown = forwardRef<HTMLDivElement, Props>(
  ({ text, title, sectionId }, ref) => {
    return (
      <section className="reset flex flex-col gap-4" ref={ref} id={sectionId}>
        {title && <h2 className={cn(textTitle3, bgTextColor)}>{title}</h2>}
        <div className={bgProductPage}>
          <MarkdownLib
            options={{
              wrapper: "article",
            }}
          >
            {text}
          </MarkdownLib>
        </div>
      </section>
    );
  }
);

export default Markdown;
