import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";

function UserLayout() {
  return (
    <main>
      <DashboardNav />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default UserLayout;
