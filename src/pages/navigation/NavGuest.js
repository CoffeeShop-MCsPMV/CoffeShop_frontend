import React from "react";
import { Link } from "react-router-dom";
import "../../style/Nav.css";
import ProductCartIcon from "../../components/ProductCartIcon";

export default function NavGuest({ setShowModal }) {
  // Ha a felhasználó rákattint a Login linkre, megjelenítjük a modált
  const handleLoginClick = () => {
    setShowModal(true); // A modális ablakot megjelenítjük
  };

  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <a href="/">
              {" "}
              <img src="./images/logo.png" width="75px" alt="" />
            </a>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Main
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/mixer">
              Mixer
            </Link>
          </li>
        </ul>
        <div className="navCartAndUser">
        <ProductCartIcon/>
          <ul className="navbar-nav">
            <li className="navbar-item nav-login-register">
              <Link
                className="nav-link btn"
                to="/login"
                onClick={handleLoginClick}
              >
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
      </div>
    </nav>
  );
}
