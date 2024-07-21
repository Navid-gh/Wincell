import { useRef } from "react";
import { cn } from "../../utils/lib/cn";
import Cross from "./icons/Cross";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Dialog = ({ children, show, setShow }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  };
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 bg-main-black/20 z-[9999] flex items-center justify-center translate-x-4 transition opacity-0",
        show && "opacity-100 translate-x-0 pointer-events-auto"
      )}
      onClick={(e) => handleClose(e)}
    >
      <div
        className="w-1/2 max-w-[35rem] p-4 bg-main-secondary-bg text-main-primary-text flex flex-col gap-4 rounded-small"
        ref={contentRef}
      >
        <Cross
          className="w-5 h-5 cursor-pointer self-start border border-main-primary-text rounded-full p-1"
          onClick={() => setShow(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default Dialog;
