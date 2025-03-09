import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
<<<<<<< HEAD
import { CartContext } from "../../context/cartContext";
=======
import ProductCartIcon from "../../components/ProductCartIcon";
>>>>>>> 46302b075409a73ddfb0603a58e6d1d9fbc6aaa7

export default function NavAdmin() {
  const { logout } = useAuthContext();
  const {setCartListEmpty}=useContext(CartContext)

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
=======
        <div className="navCartAndUser">
          <ProductCartIcon/>
          <Dropdown>
            <Dropdown.Toggle
              as="div"
              id="user-btn"
              style={{ cursor: "pointer" }}

            >
              <img
                src="./images/user.png"
                alt="User"
                style={{ borderRadius: "50%", width: "45px", height: "45px" }}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/orders">Orders</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  logout();
                  setCartListEmpty()
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}
