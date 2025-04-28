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
        <thead>
          <tr>
            <th>About us</th>
            <th>Contact us</th>
            <th>Social impact</th>
            <th>Allergens</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/coming-soon">About us</a>
            </td>
            <td>
              <a href="/coming-soon">Contact us</a>
            </td>
            <td>
              <a href="/coming-soon">Resposibility</a>
            </td>
            <td>
              <a href="/coming-soon">Allergens</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/products">Our coffees</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/coming-soon">Stories & News</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Footer;
