import React, { useState } from "react";
import "./style.css";
import tempImg from "./img/temp.svg";

const Climate = ({ temperature, humidity }) => {
  const [temp, setTemp] = useState(temperature);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={tempImg} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temp}&deg;C</div>
        <div className="climate__humidity">
          Vlhkost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button
          onClick={() => {
            setTemp(temp + 1);
          }}
          className="button"
        >
          +
        </button>
        <button
          onClick={() => {
            setTemp(temp - 1);
          }}
          className="button"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
