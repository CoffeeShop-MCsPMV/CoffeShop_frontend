import React from "react";
import Chooser from "../components/Chooser";
import "../style/Mixer.css";
import MixerPrice from "../components/MixerPrice";
import MixerImg from "../components/MixerImg";

function Mixer() {
  return (
    <div className="mixer-page">
    <MixerImg/>
    <div className="chooser">
      <Chooser />
      <MixerPrice />
    </div>
    </div>
  );
}

export default Mixer;
