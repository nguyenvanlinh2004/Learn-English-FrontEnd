import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  const location = useLocation();

  // check nếu là trang login
  const hideLayout = location.pathname === "/login";
  return (
    <>
      {!hideLayout && < Header />}
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
}
