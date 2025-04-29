import React from "react";
import { Link } from "react-router-dom";
import "../../style/Nav.css";
import ProductCartIcon from "../../components/ProductCartIcon";
import LoginRegIcon from "../../components/LoginRegIcon";

export default function NavGuest() {
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
            <Link className="nav-link links" to="/">
              Main
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link links" to="/products">
              Drinks
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link links" to="/mixer">
              Mixer
            </Link>
          </li>
        </ul>
        <div className="navCartAndUser">
          <ProductCartIcon />
          <LoginRegIcon />
        </div>
      </div>
    </nav>
  );
}
