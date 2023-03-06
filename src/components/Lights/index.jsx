import React from "react";
import "./style.css";
import Light from "../Light";

const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((item) => (
        <Light name={item.name} state={item.state} key={item.name} />
      ))}
    </div>
  );
};

export default Lights;
