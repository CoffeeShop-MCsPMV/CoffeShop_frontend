import React, { useContext } from "react";
import useAuthContext from "../context/AuthContext";
import "../style/Nav.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../context/apiContext";

function LoginRegIcon() {
  const { isMobile } = useContext(ApiContext);
  const { setShowModal } = useAuthContext();
  const handleLoginClick = () => {
    setShowModal(true); // A modális ablakot megjelenítjük
  };
  return (
    <div className={`login-reg-icon ${isMobile ? " mobile" : ""}`}>
      <ul className="navbar-nav">
        <li className="navbar-item nav-login-register">
          <Link className="nav-link btn" to="/login" onClick={handleLoginClick}>
            Login
          </Link>
          <Link
            className="nav-link btn"
            to="/register"
            onClick={handleLoginClick}
          >
            Registration
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LoginRegIcon;
