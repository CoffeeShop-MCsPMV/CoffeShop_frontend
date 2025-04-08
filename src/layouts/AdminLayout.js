import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavAdmin from "../pages/navigation/NavAdmin";
import NavAHam from "../pages/navigation/NavAHam";
import Footer from "../components/Footer";
import "../style/ComingSoon.css";

function AdminLayout() {
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
      {isMobile ? <NavAHam /> : <NavAdmin />}
      <main className="content">
        <Outlet />
      </main>
      <Footer className="footer-mobile" />
    </div>
  );
}

export default AdminLayout;
