import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import ProductCartIcon from "../../components/ProductCartIcon";
import LoginRegIcon from "../../components/LoginRegIcon";

function NavGHam() {
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
          <Dropdown.Item>
            {" "}
            <Link className="nav-link" to="/">
              Main
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            {" "}
            <Link className="nav-link" to="/products">
              Drinks
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            {" "}
            <Link className="nav-link" to="/mixer">
              Mixer
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <ProductCartIcon />
          </Dropdown.Item>
          <Dropdown.Item>
            <LoginRegIcon />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default NavGHam;
