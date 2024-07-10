import Carousel from "react-multi-carousel";
import { organizes } from "../../constants/organizes";
import { bgTextColor, textTitle2 } from "../../constants/styles";
import { cn } from "../../utils/lib/cn";

type Props = {
  title: string;
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 5,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 764,
    },
    items: 3,
    partialVisibilityGutter: 30,
  },
  minTablet: {
    breakpoint: {
      max: 764,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const OrganizeSlider = ({ title }: Props) => {
  return (
    <section className="flex flex-col gap-4 p-8">
      <h2 className={cn("self-center", textTitle2, bgTextColor)}>{title}</h2>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={1}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 6s linear"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl={false}
        minimumTouchDrag={80}
        pauseOnHover={false}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable={false}
        transitionDuration={6000}
      >
        {organizes.map((organize) => (
          <img
            key={organize}
            src={organize}
            className="dark:invert max-w-56 object-cover"
            alt="organize image"
            loading="lazy"
          />
        ))}
      </Carousel>
    </section>
  );
};

export default OrganizeSlider;
