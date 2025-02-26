import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";

export default function NavUser() {
  const { logout } = useAuthContext();

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
            <button
              className="nav-link logout"
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
