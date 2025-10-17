import { Outlet } from "react-router";
import Navbar from "../components/Navber";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <ToastContainer />
    </>
  );
};

export default MainLayout;
