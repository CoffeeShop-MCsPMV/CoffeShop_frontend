import React, { useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import useAuthContext from "../../context/AuthContext";
import { CartContext } from "../../context/cartContext";

function NavUHam() {
  const { logout } = useAuthContext();
  const { setCartListEmpty, setIsOrdered } = useContext(CartContext);
  return (
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
        <Dropdown.Item href="/profile">Own profile</Dropdown.Item>
        <Dropdown.Item href="/orders">Own orders</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => {
            logout();
            setCartListEmpty();
            setIsOrdered(false);
          }}
        >
          Sign out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavUHam;
