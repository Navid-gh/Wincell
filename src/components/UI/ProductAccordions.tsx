import { forwardRef } from "react";
import { Chapter } from "../../types/apiTypes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import { cn } from "../../utils/lib/cn";
import { bgTextColor, textBody1, textTitle3 } from "../../constants/styles";
import {
  indexToPersianCount,
  toPersianNumbers,
} from "../../utils/toPersianNumbers";
import Clock from "./icons/Clock";
import Play from "./icons/Play";

type Props = {
  title: string;
  chapters: Chapter[];
  sectionId: string;
};

const ProductAccordions = forwardRef<HTMLDivElement, Props>(
  ({ chapters, title, sectionId }, ref) => {
    return (
      <section ref={ref} className="flex flex-col gap-4" id={sectionId}>
        <h2 className={cn(textTitle3, bgTextColor)}>{title}</h2>
        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {chapters &&
            chapters.map(({ _id, episodes, time, title }, idx) => {
              return (
                <AccordionItem
                  key={_id}
                  value={_id}
                  className={cn(
                    "dark:[&_svg]:invert [&[data-state=open]_svg]:invert-0 [&[data-state=open]]:border [&[data-state=open]]:border-main-primary-text [&[data-state=open]]:text-main-black rounded-small",
                    textBody1
                  )}
                >
                  <AccordionTrigger className=" [&[data-state=open]]:bg-main-green-200 dark:[&[data-state=open]]:bg-main-gray-300 [&[data-state=open]]:text-main-primary-text [&[data-state=open]]:border-b [&[data-state=open]]:border-main-primary-text text-main-secondary-text/70 bg-main-secondary-bg p-4 shadow-box-shadow-1 [&[data-state=open]>svg]:rotate-90 hover:bg-main-green-100/50 dark:hover:bg-main-gray-50/15">
                    <div className="flex justify-between gap-2 w-full flex-wrap">
                      <span>
                        {`فصل ${indexToPersianCount(idx)} - ${title}`}
                      </span>
                      <div className="flex gap-6">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>
                            {toPersianNumbers(`${time.hour}:${time.min} ساعت`)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Play className="w-4 h-4" />
                          <span>
                            {`${toPersianNumbers(episodes.length)} ویدیو`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-main-green-100 dark:bg-main-gray-200 dark:text-main-white">
                    <ul className="flex flex-col gap-6 px-4">
                      {episodes?.map((episode) => (
                        <li
                          key={episode._id}
                          className={cn(
                            "flex flex-1 border-b border-main-green-600 pb-1 justify-between gap-2"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Play className="w-4 h-4 min-w-4 min-h-4" />
                            <span>{episode.title}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>
                              {toPersianNumbers(
                                `"${episode.time.seconds}:'${episode.time.min}`
                              )}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </section>
    );
  }
);

export default ProductAccordions;
