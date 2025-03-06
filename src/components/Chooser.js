import React, { useContext } from "react";
import { MixerContext } from "../context/mixerContext";
import IngredientCard from "./IngredientCard";

function Chooser() {
  const { baseList, milkList, syrupList, toppingList, ice } =
    useContext(MixerContext);
  return (
    <>
      <IngredientCard list={baseList} />

      <IngredientCard list={milkList} />

      <IngredientCard list={syrupList} />

      <IngredientCard list={toppingList} />

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
    </>
  );
}

export default Chooser;
