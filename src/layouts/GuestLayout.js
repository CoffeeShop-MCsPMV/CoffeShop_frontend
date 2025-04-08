import React, { useEffect, useState } from "react";
import NavGuest from "../pages/navigation/NavGuest";
import NavGHam from "../pages/navigation/NavGHam";
import { Outlet } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import Footer from "../components/Footer";
import "../style/ComingSoon.css";

function GuestLayout() {
  const { setShowModal } = useAuthContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="layout">
      {isMobile ? <NavGHam /> : <NavGuest setShowModal={setShowModal} />}
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default GuestLayout;
