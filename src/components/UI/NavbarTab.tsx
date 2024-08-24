import { NavLink } from "react-router-dom";
import { cn } from "../../utils/lib/cn";
import { bgTextColor, textBody1Bold } from "../../constants/styles";

type SVGElementProps = React.SVGAttributes<SVGElement>;

type Props = {
  url: string;
  text: string;
  place: "navbar" | "sidebar";
  Icon?: React.FC<SVGElementProps>;
};
const NavbarTab = ({ text, url, place, Icon }: Props) => {
  return (
    <li className={cn(textBody1Bold, "")}>
      <NavLink
        className={({ isActive }) => {
          let style =
            place === "sidebar"
              ? "flex gap-2 items-center w-full p-2 border-b border-b-main-secondary-text/20 transition hover:bg-main-green-100 dark:hover:bg-main-gray-100"
              : "";
          style += isActive
            ? place === "sidebar"
              ? " bg-main-green-200 text-main-bg dark:bg-main-gray-300"
              : bgTextColor + ""
            : "";
          return style;
        }}
        to={url}
      >
        {place === "navbar" ? (
          text
        ) : (
          <>
            {Icon && <Icon className="w-4 h-4 dark:invert" fill="#484D57" />}
            <span>{text}</span>
          </>
        )}
      </NavLink>
    </li>
  );
};

export default NavbarTab;
