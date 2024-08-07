import ImageSlide from "../../components/UI/ImageSlide";
import { textTitle1 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";

const About = () => {
  return (
    <main className="h-screen flex flex-col gap-4">
      <ImageSlide image={""}>
        <>
          <h1 className={cn("text-main-white", textTitle1)}>درباره ما</h1>
        </>
      </ImageSlide>
      <div className="p-4 flex flex-col gap-2">
        <p>درباره ما</p>
        <p>درباره ما</p>
      </div>
    </main>
  );
};

export default About;
