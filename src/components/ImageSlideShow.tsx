import Carousel from "react-multi-carousel";
import ImageSlide from "./UI/ImageSlide";

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
    id: 1,
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
        <ImageSlide key={slide.id} {...slide} />
      ))}
    </Carousel>
  );
};

export default ImageSlideShow;
