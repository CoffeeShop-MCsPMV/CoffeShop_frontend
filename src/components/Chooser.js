import React, { useContext } from "react";
import { MixerContext } from "../context/mixerContext";
import IngredientCard from "./IngredientCard";

function Chooser() {
  const { baseList, milkList, syrupList, toppingList, ice } =
    useContext(MixerContext);
  return (
    <>
      <div className="Base">
        <IngredientCard list={baseList} />
      </div>
      <div className="Milk">
        <IngredientCard list={milkList} />
      </div>
      <div className="Syrup">
        <IngredientCard list={syrupList} />
      </div>
      <div className="Topping">
        <IngredientCard list={toppingList} />
      </div>
      <div className="Ice">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Ice
          </label>
        </div>
      </div>
    </>
  );
}

export default Chooser;
