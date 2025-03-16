import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";
import Dropdown from "react-bootstrap/Dropdown";
import { CartContext } from "../../context/cartContext";
import ProductCartIcon from "../../components/ProductCartIcon";


export default function NavUser() {
  const { logout } = useAuthContext();
  const {setCartListEmpty, setIsOrdered}=useContext(CartContext);

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
              Products
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link links" to="/mixer">
              Mixer
            </Link>
          </li>
        </ul>
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
                  setIsOrdered(false)
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
