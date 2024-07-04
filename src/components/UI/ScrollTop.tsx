import { cn } from "../../utils/lib/cn";
import useScrollBtn from "../../hooks/useScrollBtn";
import LeftArrow from "./icons/LeftArrow";

function ScrollTop() {
  const { showButton, scrollToTop } = useScrollBtn();

  return (
    <div
      className={cn(
        "fixed bottom-3 left-7 w-8 h-8 opacity-0 animate-bounce scale-0 transition-all duration-300 bg-main-primary-text p-2 rounded-xl cursor-pointer z-50",
        { "scale-100 opacity-100": showButton }
      )}
      onClick={scrollToTop}
    >
      <span>
        <LeftArrow
          className="rotate-90 w-full h-full fill-main-primary-bg"
          id="arrow-svg"
        />
      </span>
    </div>
  );
}

export default ScrollTop;
