import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";

export default function NavAdmin() {
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
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <Dropdown>
          <Dropdown.Toggle as="div" id="user-btn" style={{ cursor: "pointer" }}>
            <img
              src="./images/user.png" 
              alt="User"
              style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/profil">Profil</Dropdown.Item>
            <Dropdown.Item href="/orders">Orders</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                logout();
              }}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
