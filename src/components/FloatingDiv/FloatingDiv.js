import React from "react";

import "./FloatingDiv.css";

const FloatinDiv = ({ img, text1, text2 }) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" style={{ width: 150, height: 100, padding: 5 }} />
      <span>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
