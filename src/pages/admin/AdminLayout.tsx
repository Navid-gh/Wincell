import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/AdminNavbar";

function AdminLayout() {
  return (
    <main className="flex gap-2 article-sidebar:flex-col">
      <AdminNavbar />
      <section className="pt-6 px-4 w-full">
        <Outlet />
      </section>
    </main>
  );
}

export default AdminLayout;
