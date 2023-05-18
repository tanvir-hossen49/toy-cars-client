import Footer from "../page/Shared/Footer";
import { Navbar } from "../page/Shared/Navbar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
