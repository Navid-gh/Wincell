import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../components/UI/Footer";
import ScrollTop from "../../components/UI/ScrollTop";
import { textBody2 } from "../../constants/styles";

function Layout() {
  return (
    <>
      <Navbar />
      <Toaster
        toastOptions={{
          className:
            "bg-main-secondary-bg text-main-primary-text shadow-box-shadow-1 " +
            textBody2,
        }}
      />
      <Outlet />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default Layout;
