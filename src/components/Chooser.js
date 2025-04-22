import React, { useContext, useEffect } from "react";
import { MixerContext } from "../context/mixerContext";
import IngredientCard from "./IngredientCard";
import "../style/Mixer.css";

function Chooser() {
  const { baseList, milkList, syrupList, toppingList, setIce, ice } =
    useContext(MixerContext);
   

  return (
    <>
      <IngredientCard list={baseList} id={0}/>
      <IngredientCard list={milkList} id={1} />
      <IngredientCard list={toppingList} id={3} />
      <IngredientCard list={syrupList} id={2} />

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={ice} 
          onChange={(e) => {setIce(!ice); }}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Ice
        </label>
      </div>
    </>
  );
}

export default Chooser;
