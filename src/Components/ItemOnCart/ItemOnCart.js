import React, { useState, useEffect } from "react";
import "./ItemOnCart.sass";

const ItemOnCart = () => {
  const price = 1190; // Get price from DB
  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(price);

  const getTotal = () => setTotal(price * qty);
  useEffect(() => {
    getTotal();
    console.log("Use effect running", total);
  }, [qty]);
  return (
    <div className="ItemOnCart">
      <div className="info">
        <img
          src="https://www.cyberpowerpc.com/images/cs/icue220t/CS-429-141_400.png"
          alt=""
        />
        <div className="item">
          <h1 className="name">Gaming PC</h1>
          <p className='ref-number'>Ref. 0009</p>
        </div>
        <div className="qty-container">
          <p className="qty">{qty}</p>
          <div className="btn">
            <i className="plus fas fa-plus" onClick={() => setQty(qty + 1)}></i>
            <i
              className="minus fas fa-minus"
              onClick={() => setQty(qty - 1)}
            ></i>
          </div>
        </div>
        <p className="price"><span>$</span> {total}</p>
      </div>
      <div className="delete-btn">
        <i className=" fas fa-times"></i>
      </div>
      
    </div>
  );
};

export default ItemOnCart;
