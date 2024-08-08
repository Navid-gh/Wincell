import { useQuery } from "@tanstack/react-query";
import { getFAQ } from "../../api";
import ContactForm from "../../components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/UI/Accordion";
import ImageSlide from "../../components/UI/ImageSlide";
import {
  bgTextColor,
  textBody1,
  textTitle1,
  textTitle2,
} from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import WithLoaderAndError from "../../components/WithLoaderAndError";

const fakeData = [
  {
    q: "سوال اول",
    a: "اول",
    _id: "1",
  },
  {
    q: "سوال دوم",
    a: "دوم",
    _id: "2",
  },
  {
    q: "سوال شوم",
    a: "شوم",
    _id: "3",
  },
  {
    q: "سوال چهارم",
    a: "چهارم",
    _id: "4",
  },
];

const Contact = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["slides"],
    queryFn: () => getFAQ(),
  });
  return (
    <main className="flex flex-col gap-4">
      <ImageSlide image={""}>
        <>
          <h1 className={cn("text-main-white", textTitle1)}>تماس با ما</h1>
        </>
      </ImageSlide>
      <section className="p-4 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className={cn(textTitle2, bgTextColor)}>ارتباط با پشتیبانی</h2>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className={cn(textTitle2, bgTextColor)}>سوالات متداول</h2>
          <WithLoaderAndError {...{ data, isLoading, isError, error }}>
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-4"
            >
              {fakeData.map(({ _id, a, q }) => (
                <AccordionItem
                  key={_id}
                  value={_id}
                  className={cn(
                    "dark:[&_svg]:invert [&[data-state=open]_svg]:invert-0 [&[data-state=open]]:border [&[data-state=open]]:border-main-primary-text [&[data-state=open]]:text-main-black rounded-small",
                    textBody1
                  )}
                >
                  <AccordionTrigger className=" [&[data-state=open]]:bg-main-green-200 [&[data-state=open]]:text-main-black [&[data-state=open]]:border-b [&[data-state=open]]:border-main-primary-text text-main-secondary-text/70 bg-main-secondary-bg p-4 shadow-box-shadow-1 [&[data-state=open]>svg]:rotate-90 hover:bg-main-green-100/50 dark:hover:bg-main-gray-50/15">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="bg-main-green-100">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </WithLoaderAndError>
        </div>
      </section>
    </main>
  );
};

export default Contact;
