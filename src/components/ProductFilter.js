import React, { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ProductFilterCard from "./ProductFilterCard";
import ProductCartIcon from "./ProductCartIcon";

function ProductFilter() {
  const filterOptions = [
    { id: 1, code: "COF", title: "Coffee", src: "./images/filter/COF.png" },
    {
      id: 2,
      code: "ICF",
      title: "Iced Coffee",
      src: "./images/filter/ICF.png",
    },
    { id: 3, code: "TEA", title: "Tea", src: "./images/filter/TEA.png" },
    { id: 4, code: "ICT", title: "Iced Tea", src: "./images/filter/ICT.png" },
    { id: 5, code: "HOD", title: "Hot Drinks", src: "./images/filter/HDR.png" },
    {
      id: 6,
      code: "IDR",
      title: "Iced Drinks",
      src: "./images/filter/IDR.png",
    },
  ];

  const { setProductList, getData } = useContext(ApiContext);

  function getFilteredData(choosedId) {
    console.log("lefutott");
    const filterCategory = filterOptions[choosedId - 1].code;
    if (filterCategory) {
      getData(`/api/by-category?category=${filterCategory}`, setProductList);
    }
  }

  return (
    <div className="filter-and-cart">
      <div className="filter-cards">
        {filterOptions.map((category, i) => (
          <ProductFilterCard
            category={category}
            onClick={() => getFilteredData(category.id)}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
