import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";

function UserLayout() {
  return (
    <main className="flex gap-2 article-sidebar:flex-col">
      <DashboardNav />
      <section className="pt-6 px-4 w-full">
        <Outlet />
      </section>
    </main>
  );
}

export default UserLayout;
