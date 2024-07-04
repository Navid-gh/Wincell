import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/UI/Footer";
import ScrollTop from "../../components/UI/ScrollTop";

function Layout() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Layout;
