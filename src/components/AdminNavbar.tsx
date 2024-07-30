import { NavLink } from "react-router-dom";
import { adminNavItems } from "../constants/dashboard";

const AdminNavbar = () => {
  return (
    <nav className="flex-[35%] p-4 bg-main-secondary-bg text-main-primary-text shadow-adminNavbar self-start rounded-3xl">
      <ul className="flex flex-col gap-3 items-center">
        {adminNavItems.map(({ id, link, name }, idx) =>
          idx === 0 ? (
            <li key={id}>
              <NavLink
                end
                to={link}
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                {name}
              </NavLink>
            </li>
          ) : (
            <li key={id}>
              <NavLink
                to={link}
                end
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                {name}
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default AdminNavbar;
