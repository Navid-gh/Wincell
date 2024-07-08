import Carousel from "react-multi-carousel";
import ImageSlide from "./UI/ImageSlide";
import { cn } from "../utils/lib/cn";
import {
  bgTextColor,
  textBody2,
  textTitle2,
  textTitle3,
} from "../constants/styles";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1160 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1160, min: 860 },
    items: 1,
    slidesToSlide: 1,
  },
  miniTablet: {
    breakpoint: { max: 860, min: 560 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const slides = [
  {
    _id: "1",
    title: "وینسل",
    subTitle: "بهترین مدل برای زیست",
    description: "درک زیست با وینسل در کمترین زمان",
    image: "/images/fake/slide-bg.png",
    link: "/about",
  },
];

const ImageSlideShow = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside
      rewind={false}
      responsive={responsive}
      rewindWithAnimation={false}
      rtl={true}
      shouldResetAutoplay
      slidesToSlide={1}
      swipeable
    >
      {slides?.map((slide) => (
        <ImageSlide key={slide._id} image={slide.image}>
          <>
            <h2 className={cn("", textTitle2, bgTextColor)}>{slide.title}</h2>
            <h3
              className={cn(
                "text-main-primary-bg bg-main-primary-text rounded-small",
                textTitle3
              )}
            >
              {slide.subTitle}
            </h3>
            <p className={cn("", textBody2)}>{slide.description}</p>
            <Link to="/about" className="h-10">
              <Button intent="primary" size="base" role="link">
                اطلاعات بیشتر
              </Button>
            </Link>
          </>
        </ImageSlide>
      ))}
    </Carousel>
  );
};

export default ImageSlideShow;
