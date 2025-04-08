import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function NavGHam({ setShowModal }) {

  const handleLoginClick = () => {
    setShowModal(true); 
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          as="div"
          id="hamburger-btn"
          style={{ cursor: "pointer" }}
        >
          <img
            src="./images/hamburger.png"
            alt="Menu"
            style={{ width: "45px", height: "45px" }}
            className="hamburger-menu"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Main</Dropdown.Item>
          <Dropdown.Item href="/products">Drinks</Dropdown.Item>
          <Dropdown.Item href="/mixer">Mixer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
    </>
  );
}

export default NavGHam;
