import { useNavigate } from "react-router-dom";
import { booleanStateHandleType } from "../../types/stateFnsTypes";
import Basket from "./icons/Basket";
import Hamburger from "./icons/Hamburger";
import SearchIcon from "./icons/Search";
import User from "./icons/User";
import { cn } from "../../utils/lib/cn";
import { mainBorder } from "../../constants/styles";

export type NavbarProps = {
  setOpen: booleanStateHandleType;
  searchHandler: () => void;
};

const MobileNavbar = ({ setOpen, searchHandler }: NavbarProps) => {
  const Navigator = useNavigate();
  return (
    <aside
      className={cn(
        "flex items-center gap-2 bg-main-secondary-bg shadow-box-shadow-1 p-4 fixed bottom-4 rounded-small left-2 right-2 sm:hidden",
        mainBorder,
        "border-main-primary-text/10"
      )}
    >
      <Hamburger
        className="w-7 h-7 cursor-pointer dark:invert flex-1"
        onClick={() => setOpen((prev) => !prev)}
      />
      <SearchIcon
        className="w-7 h-7 cursor-pointer dark:invert flex-1"
        onClick={searchHandler}
      />
      <Basket
        className="w-7 h-7 cursor-pointer dark:invert flex-1"
        onClick={() => Navigator("/dashboard/basket")}
      />
      <User
        fill="#070D04"
        className="w-7 h-7 cursor-pointer dark:invert flex-1"
        onClick={() => Navigator("/dashboard")}
      />
    </aside>
  );
};

export default MobileNavbar;
