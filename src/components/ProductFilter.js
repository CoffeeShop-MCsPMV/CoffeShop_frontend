import React, { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ProductFilter() {
  const { setProductList, getData } = useContext(ApiContext);

  const filterOptions = [
    { id: 1, code: "COF", title: "Coffee" },
    { id: 2, code: "ICF", title: "Iced Coffee" },
    { id: 3, code: "TEA", title: "TEA" },
    { id: 4, code: "ICT", title: "Iced Tea" },
    { id: 5, code: "HOD", title: "Hot Drinks" },
    { id: 6, code: "IDR", title: "Iced Drinks" },
  ];

  // Handler függvény az adatok szűrésére
  function getFilteredData(choosedId) {
    console.log("lefutott");
    const filterCategory = filterOptions[choosedId - 1].code;
    if (filterCategory) {
      getData(`/api/by-category?category=${filterCategory}`, setProductList);
    }
  }

  return (
    <div className="btn-group dropend" role="group">
   <img
  type="button"
  className="dropdown-toggle"
  data-bs-toggle="dropdown"
  src="./images/filter.png"
  alt="Filter"
  style={{  width: "60px" }}  // Javított stílus objektum
/>

      <ul className="dropdown-menu">
        {filterOptions.map(({ id, title }) => (
          <li key={id}>
            <a
              className="dropdown-item"
              href="#"
              id={id}
              onClick={() => getFilteredData(id)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
