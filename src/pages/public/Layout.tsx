import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/UI/Footer";
import ScrollTop from "../../components/UI/ScrollTop";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Layout;
