type Props = {
  children: JSX.Element;
  image: string;
};

const ImageSlide = ({ children, image }: Props) => {
  return (
    <div className="relative w-full h-[22.875rem] flex flex-col items-start justify-center">
      <div className="flex flex-col items-center pr-24 gap-2 sidebar:pr-12 mobile:pr-4">
        {children}
      </div>
      <div
        className="-z-10 absolute top-0 left-0 w-full h-full max-w-full max-h-full bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(" + image + ")" }}
      />
    </div>
  );
};

export default ImageSlide;
