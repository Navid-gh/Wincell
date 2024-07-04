import { useState, useEffect } from "react";
import useDebounceFunc from "./useDebounceFunc";
import useToTopOnNav from "./useToTopOnNav";

const useScrollBtn = () => {
  useToTopOnNav();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 300) setShowButton(true);
    else setShowButton(false);
  };

  const debouncedScroll = useDebounceFunc(handleScroll, 300);

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { showButton, scrollToTop };
};

export default useScrollBtn;
