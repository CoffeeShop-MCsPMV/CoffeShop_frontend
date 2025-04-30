import React, { useContext } from "react";
import { MixerContext } from "../context/mixerContext";

function MixerImg() {
  const { addedIngredientList, ice } = useContext(MixerContext);
  return (
    <div className="mixer-img">
      <img
        src={`./images/mixer/${addedIngredientList[0].product_id}_${addedIngredientList[3].product_id}_${addedIngredientList[2].product_id}.svg`}
        alt="Mixed Drink"
      />
      <div className="milk">
        <img
          src={`./images/mixer/${addedIngredientList[1].product_id}.png`}
          alt=""
        />
      </div>
      {ice && (
        <div className="ice">
          <img src="/images/mixer/ice.png" alt="Ice" />
        </div>
      )}
    </div>
  );
}

export default MixerImg;
