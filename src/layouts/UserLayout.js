import React, { useEffect, useState } from "react";
import NavUser from "../pages/navigation/NavUser";
import NavUHam from "../pages/navigation/NavUHam";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../style/ComingSoon.css";

function UserLayout() {
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
        {isMobile ? <NavUHam /> : <NavUser />}
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default UserLayout;
