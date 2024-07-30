import ImageSlide from "../../components/UI/ImageSlide";
import { textTitle1 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";

const Contact = () => {
  return (
    <main className="h-screen flex flex-col gap-4">
      <ImageSlide image={""}>
        <>
          <h1 className={cn("text-main-white", textTitle1)}>تماس با ما</h1>
        </>
      </ImageSlide>
      <div className="p-4 flex flex-col gap-2">
        <p>تماس با ما</p>
        <p>تماس با ما</p>
      </div>
    </main>
  );
};

export default Contact;
