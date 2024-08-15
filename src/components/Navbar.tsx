import { navbarTabs } from "../constants/navbarTabs";
import NavbarTab from "./UI/NavbarTab";
import IconWrapper from "./UI/IconWrapper";
import Logo from "./UI/icons/Logo";
import SearchInput from "./SearchInput";
import ThemeToggle from "./ThemeToggle";
import Button from "./UI/Button";
import { Link, useLocation } from "react-router-dom";
import Basket from "./UI/icons/Basket";
import Hamburger from "./UI/icons/Hamburger";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { cn } from "../utils/lib/cn";
import { useAuth } from "../hooks/useAuth";
import MobileNavbar from "./UI/MobileNavbar";

const Navbar = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { pathname } = useLocation();
  const { role } = useAuth();
  let isSticky = true;
  if (
    (pathname.includes("course") && !pathname.includes("courses")) ||
    (pathname.includes("article") && !pathname.includes("articles")) ||
    pathname.includes("dashboard")
  )
    isSticky = false;

  const openSearchFromMobileNavbar = () => {
    setSideOpen(true);
    setOpenSearch(true);
  };
  return (
    <header
      className={cn(
        "bg-main-secondary-bg sticky top-0 w-full p-2 py-4 z-[10000]",
        !isSticky && "static isolate"
      )}
    >
      <Sidebar
        {...{ open: sideOpen, setOpen: setSideOpen, openSearch, setOpenSearch }}
      />
      <nav className="flex justify-between items-center h-9">
        <div className="flex items-center gap-4 sidebar:w-1/2 sidebar:justify-between">
          <Hamburger
            className="w-7 h-7 hidden sidebar:block cursor-pointer fill-main-primary-text dark:invert"
            onClick={() => setSideOpen(true)}
          />
          <Link to="/">
            <IconWrapper
              className="p-1 w-16 h-16 border-0 sidebar:w-13 sidebar:h-13"
              hasHoverEffect={false}
            >
              <Logo id="navbar-logo" />
            </IconWrapper>
          </Link>
          <ul className="flex gap-6 sidebar:hidden">
            {navbarTabs.map((tab) => (
              <NavbarTab
                key={"navbar-" + tab.id}
                text={tab.name}
                url={tab.path}
                place="navbar"
              />
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4 h-full">
          <div className="sidebar:hidden">
            <SearchInput type="navbar" placeHolder="چی میخوای یاد بگیری؟" />
          </div>
          <div className="sidebar:hidden">
            <ThemeToggle id={"navbar"} />
          </div>
          {role == "GUEST" ? (
            <Link to="/login" className="w-full h-full sidebar:hidden">
              <Button intent="primary" size="base">
                ثبت نام/ورود
              </Button>
            </Link>
          ) : role == "ADMIN" ? (
            <Link to="/admin" className="w-full h-full sidebar:hidden">
              <Button intent="primary" size="base">
                پنل ادمین
              </Button>
            </Link>
          ) : (
            <Link to="/dashboard" className="w-full h-full sidebar:hidden">
              <Button intent="primary" size="base">
                پنل کاربری
              </Button>
            </Link>
          )}
          <Link to="/dashboard/basket">
            <IconWrapper className="p-2">
              <Basket id="navbar-basket" className="w-5 h-5 dark:invert" />
            </IconWrapper>
          </Link>
        </div>
      </nav>
      <MobileNavbar
        setOpen={setSideOpen}
        searchHandler={openSearchFromMobileNavbar}
      />
    </header>
  );
};

export default Navbar;
