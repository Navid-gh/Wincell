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
import { useQuery } from "@tanstack/react-query";
import { getSlides } from "../api";
import WithLoaderAndError from "./WithLoaderAndError";

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

const ImageSlideShow = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["slides"],
    queryFn: getSlides,
  });
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
      <WithLoaderAndError {...{ data, isLoading, isError, error }}>
        {data?.map((slide) => (
          <ImageSlide key={slide._id} image={slide.images[0]}>
            <>
              {slide.title && (
                <h2 className={cn("", textTitle2, bgTextColor)}>
                  {slide.title}
                </h2>
              )}
              {slide.subtitle && (
                <h3
                  className={cn(
                    "text-main-primary-bg bg-main-primary-text rounded-small",
                    textTitle3
                  )}
                >
                  {slide.subtitle}
                </h3>
              )}
              {slide.description && (
                <p className={cn("", textBody2)}>{slide.description}</p>
              )}
              {slide.url && (
                <Link to={slide.url} className="h-10">
                  <Button intent="primary" size="base" role="link">
                    اطلاعات بیشتر
                  </Button>
                </Link>
              )}
            </>
          </ImageSlide>
        ))}
      </WithLoaderAndError>
    </Carousel>
  );
};

export default ImageSlideShow;
