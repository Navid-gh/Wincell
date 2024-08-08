import { useQuery } from "@tanstack/react-query";
import { getFAQ } from "../../api";
import ContactForm from "../../components/ContactForm";
import ImageSlide from "../../components/UI/ImageSlide";
import { bgTextColor, textTitle1, textTitle2 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";
import WithLoaderAndError from "../../components/WithLoaderAndError";
import FaqAccordions from "../../components/UI/FaqAccordions";

const Contact = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["faq"],
    queryFn: () => getFAQ(),
  });
  return (
    <main className="flex flex-col gap-4">
      <ImageSlide image={""}>
        <>
          <h1 className={cn("text-main-white", textTitle1)}>تماس با ما</h1>
        </>
      </ImageSlide>
      <section className="p-4 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className={cn(textTitle2, bgTextColor)}>ارتباط با پشتیبانی</h2>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className={cn(textTitle2, bgTextColor)}>سوالات متداول</h2>
          <WithLoaderAndError {...{ data, isLoading, isError, error }}>
            <FaqAccordions data={data} />
          </WithLoaderAndError>
        </div>
      </section>
    </main>
  );
};

export default Contact;
