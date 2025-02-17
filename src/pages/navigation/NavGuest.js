import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../style/nav.css';


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
            <Link className="nav-link" to="/login" onClick={handleLoginClick}>
              Login
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/register" onClick={handleLoginClick}>
              Registration
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
