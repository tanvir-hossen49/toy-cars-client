import Footer from "../page/Shared/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../page/Shared/Navbar";
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
