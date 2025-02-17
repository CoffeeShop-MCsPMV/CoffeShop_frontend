import React from "react";
import { Outlet } from "react-router-dom";
import NavAdmin from "../pages/navigation/NavAdmin";
import Footer from "../components/Footer";

function AdminLayout() {
  return (
    <>
      <NavAdmin />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminLayout;
