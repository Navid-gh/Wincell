import { cn } from "../../utils/lib/cn";
import { SidebarProps } from "../Sidebar";

const BackDrop = ({ open, setOpen }: SidebarProps) => {
  return (
    <div
      className={cn(
        "hidden fixed top-0 left-0 w-full h-full bg-main-black/10 z-30",
        open && "block"
      )}
      onClick={() => setOpen(false)}
    ></div>
  );
};

export default BackDrop;
