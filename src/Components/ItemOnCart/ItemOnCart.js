import React, { useState } from "react";
import "./ItemOnCart.sass";

const ItemOnCart = () => {
  const [qty, setQty] = useState(5);
  return (
    <div className="ItemOnCart">
      <div className="info">
        <img src="" alt="" />
        <h1 className="name"></h1>
        <p>Ref. 0009</p>
        <div className="qty-container">
          <p className="qty">{qty}</p>
          <div className="btn">
            <i className="fas fa-plus"></i>
            <i className="fas fa-minus"></i>
          </div>
        </div>
        <p className="price">$ 1190</p>
      </div>
      <i className="fas fa-times"></i>
    </div>
  );
};

export default ItemOnCart;
