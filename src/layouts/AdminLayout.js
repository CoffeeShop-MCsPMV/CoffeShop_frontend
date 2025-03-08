import React from "react";
import { Outlet } from "react-router-dom";
import NavAdmin from "../pages/navigation/NavAdmin";
import Footer from "../components/Footer";
import "../style/ComingSoon.css";

function AdminLayout() {

  return (
    // <div className="layout">
    //   <NavAdmin />
    //   <main className="content">
    //         <Outlet />
    //   </main>
    //   <Footer />
    // </div>
    <>
      <NavAdmin />

      <Outlet />

      <Footer />
    </>
  );
}

export default AdminLayout;
