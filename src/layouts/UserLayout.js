import React from "react";
import NavUser from "../pages/navigation/NavUser";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../style/ComingSoon.css";

function UserLayout() {
  return (
    <>
      <NavUser />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;
