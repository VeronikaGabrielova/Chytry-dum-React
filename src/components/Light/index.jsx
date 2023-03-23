import React, { useState } from "react";
import "./style.css";
import lightOff from "./img/light-off.svg";
import lightOn from "./img/light-on.svg";

const Light = ({ name, state }) => {
  const [lights, setLights] = useState(state);

  return (
    <div
      className="light"
      onClick={() => {
        setLights(lights === "off" ? "on" : "off");
      }}
    >
      <div className="light__icon">
        <img src={lights === "on" ? lightOn : lightOff} />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
