import React from "react";
import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  return (
    <div className="card" >
      <img src={emoji} alt="" style={{ width: 150, height: 150 }} />
      <span style={{ fontWeight: "bold" }}>{heading}</span>
      <span>{detail}</span>
      {/* <button className="c-button">LEARN MORE</button> */}
    </div>
  );
};

export default Card;
