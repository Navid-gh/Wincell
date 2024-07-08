import { useState } from "react";
import { navbarTabs } from "../constants/navbarTabs";
import NavbarTab from "./UI/NavbarTab";
import IconWrapper from "./UI/IconWrapper";
import Search from "./UI/icons/Search";
import ThemeToggle from "./ThemeToggle";
import Cross from "./UI/icons/Cross";
import { cn } from "../utils/lib/cn";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import SearchInput from "./SearchInput";
import BackDrop from "./UI/BackDrop";

export type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <aside
        className={cn(
          "hidden w-[17.5rem] z-40 shadow-box-shadow-3 bg-main-secondary-bg fixed right-0 top-0 sidebar:flex flex-col gap-2 py-4 rounded-big opacity-0 translate-x-full transition-all duration-300",
          {
            "opacity-100 translate-x-0": open,
          }
        )}
      >
        <div className="flex items-center gap-3 px-4">
          <IconWrapper
            className="p-2 border-main-primary-text rounded-full border-2"
            onClick={() => setOpenSearch((prev) => !prev)}
            hasHoverEffect={false}
          >
            <Search className="w-4 h-4 dark:invert" />
          </IconWrapper>
          <ThemeToggle id="sidebar" />
          <Cross
            className="w-4 h-4 dark:invert mr-auto cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <div
          className={cn(
            "h-0 px-4 opacity-0 pointer-events-none transition-all duration-300",
            openSearch && "opacity-100 pointer-events-auto h-8"
          )}
        >
          <SearchInput type="navbar" placeHolder="چی میخوای یاد بگیری؟" />
        </div>
        <ul className="flex flex-col gap-2">
          {navbarTabs.map((tab) => (
            <NavbarTab
              key={"sidebar-" + tab.id}
              text={tab.name}
              url={tab.path}
              place="sidebar"
              Icon={tab.icon}
            />
          ))}
        </ul>
        <div className="px-4">
          <Link to="/login" className="w-full h-full">
            <Button intent="primary" size="base">
              ثبت نام/ورود
            </Button>
          </Link>
        </div>
      </aside>
      <BackDrop {...{ open, setOpen }} />
    </>
  );
};

export default Sidebar;
