import IconWrapper from "./UI/IconWrapper";
import User from "./UI/icons/User";
import { useAppDispatch, useAppSelector } from "../hooks/useReduxHooks";
import { userNavItems } from "../constants/dashboard";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../redux/userSlice";
import { removeCookie } from "../utils/cookie";
import { textBody1, textBody1Bold, textBody3 } from "../constants/styles";
import { cn } from "../utils/lib/cn";

const DashboardNav = () => {
  const { data } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const listFirstPart = userNavItems.slice(0, 4);
  const listSecondPart = userNavItems.slice(4, userNavItems.length);

  const handleLogout = () => {
    dispatch(logOut());
    removeCookie("win_token");
    navigate("/");
  };
  return (
    <nav
      className="sticky top-0 z-50 flex flex-col bg-main-secondary-bg pt-4 overflow-hidden rounded-bl-small basis-64 shrink-0 text-main-secondary-text self-start shadow-box-shadow-1
     article-sidebar:basis-auto article-sidebar:min-w-[50%]"
    >
      <div className="flex px-4 flex-col gap-1 items-center pb-1 border-b border-b-main-secondary-text/30">
        <IconWrapper>
          <User className="w-6 h-6" />
        </IconWrapper>
        <span className={textBody1Bold}>
          {data?.first_name + " " + data?.last_name}
        </span>
        <span className={textBody3}>{data?.email}</span>
      </div>
      {[listFirstPart, listSecondPart].map((list, index) => (
        <div
          key={index}
          role="list"
          className={cn(
            "flex flex-col",
            textBody1,
            index === 0 && "border-b border-b-main-secondary-text/30"
          )}
        >
          {list.map((item) =>
            item.link === "logout" ? (
              <div
                key={item.id}
                role="listitem"
                onClick={handleLogout}
                className="flex items-center gap-2 p-3 transition duration-300 hover:bg-main-green-50 text-main-secondary-text cursor-pointer"
              >
                {<item.Icon className="w-4 h-4 dark:invert" fill="#484D57" />}
                <span>{item.name}</span>
              </div>
            ) : (
              <NavLink
                role="listitem"
                to={item.link}
                className={({ isActive }) => {
                  return cn(
                    "flex items-center gap-2 p-3 transition duration-300 hover:bg-main-green-50",
                    isActive
                      ? "bg-main-green-300 text-main-black hover:bg-main-green-300"
                      : "text-main-secondary-text"
                  );
                }}
                key={item.id}
                end
              >
                {<item.Icon className="w-4 h-4 dark:invert" fill="#484D57" />}
                <span>{item.name}</span>
              </NavLink>
            )
          )}
        </div>
      ))}
    </nav>
  );
};

export default DashboardNav;
