import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import NavAdmin from "../pages/navigation/NavAdmin";
import Footer from "../components/Footer";

function AdminLayout() {
  const { user } = useAuthContext();
  return (
    <>
      <NavAdmin />
      <Outlet />
      <Footer />
    </>
  );
}

export default AdminLayout;
