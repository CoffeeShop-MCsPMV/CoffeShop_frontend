import React from "react";
import NavGuest from "../pages/navigation/NavGuest";
import { Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import Footer from "../components/Footer";
import "../style/ComingSoon.css";

function GuestLayout() {
  const { setShowModal } = useAuthContext();
  return (
    <div className="layout">
    <NavGuest setShowModal = {setShowModal}/>
    <main className="content">
      <Outlet />
    </main>
    <Footer />
  </div>
  );
}

export default GuestLayout;
