import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function MainLayout() {
  const location = useLocation();

  // check nếu là trang login
  const hideLayout = location.pathname === "/login";
  const showBanner = location.pathname !== "/contact";
  return (
    <>
      {!hideLayout && <Header />}
      {!hideLayout && showBanner && <Banner />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
}
