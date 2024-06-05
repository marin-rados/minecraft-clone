import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./scrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
