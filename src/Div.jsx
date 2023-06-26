import React from "react";

const Div = ({ icon, name, price, symbol, index }) => {
  return (
    <>
      <div className="bit-box">
        <div className="bit-logo">
          <img src={icon} alt="bitcoin" srcset="" />
        </div>
        <div className="bit-name">
          <div className="name-bit">{name}</div>
        </div>
        <div className="bit-data">
          <div className="value">{price}</div>
          <div className="symbol">({symbol})</div>
        </div>
        <h1>{index}</h1>
      </div>
    </>
  );
};

export default Div;
