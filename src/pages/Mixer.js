import React from "react";
import Chooser from "../components/Chooser";
import "../style/Mixer.css";
import MixerPrice from "../components/MixerPrice";

function Mixer() {
  return (
    <div className="chooser">
      <Chooser />
      <MixerPrice />
    </div>
  );
}

export default Mixer;
