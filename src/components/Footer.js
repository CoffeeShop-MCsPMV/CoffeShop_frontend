import React from "react";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <a href="/">
        {" "}
        <img src="./images/logo.png" width="75px" alt="" />
      </a>
      <table>
        <tr>
          <th>About us</th>
          <th>Contact us</th>
          <th>Social impact</th>
          <th>Allergens</th>
        </tr>
        <tr>
          <td>
            <a href="">About us</a>
          </td>
          <td>
            <a href="">Contact us</a>
          </td>
          <td>
            <a href="">Resposibility</a>
          </td>
          <td>
            <a href="">Allergens</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="/products">Our coffees</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="">Stories & News</a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Footer;
