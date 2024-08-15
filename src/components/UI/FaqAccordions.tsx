import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import { cn } from "../../utils/lib/cn";
import { textBody1 } from "../../constants/styles";
import { Faq } from "../../types/apiTypes";

const FaqAccordions = ({ data }: { data: Faq[] | undefined }) => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-4">
      {data?.map(({ _id, answer, question }) => (
        <AccordionItem
          key={_id}
          value={_id}
          className={cn(
            "dark:[&_svg]:invert [&[data-state=open]_svg]:invert-0 [&[data-state=open]]:border [&[data-state=open]]:border-main-primary-text [&[data-state=open]]:text-main-black rounded-small",
            textBody1
          )}
        >
          <AccordionTrigger className=" [&[data-state=open]]:bg-main-green-200 dark:[&[data-state=open]]:bg-main-gray-300 [&[data-state=open]]:text-main-primary-text [&[data-state=open]]:border-b [&[data-state=open]]:border-main-primary-text text-main-secondary-text/70 bg-main-secondary-bg p-4 shadow-box-shadow-1 [&[data-state=open]>svg]:rotate-90 hover:bg-main-green-100/50 dark:hover:bg-main-gray-50/15">
            {question}
          </AccordionTrigger>
          <AccordionContent className="bg-main-green-100 dark:bg-main-gray-200 dark:text-main-white">
            {answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordions;
