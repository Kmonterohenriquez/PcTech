import React from "react";
import "./Cart.sass";
import { Link } from "react-router-dom";
import logo from "../../img/blue_logo.png";
import ItemOnCart from "../../Components/ItemOnCart/ItemOnCart";
const Cart = (props) => {
  const goBack = () => props.history.goBack();
  return (
    <div className="Cart container">
      <div className="header">
        <img src={logo} onClick={() => goBack()} alt="" className="logo" />
        <h1 className="title">Your Shopping Cart</h1>
        <hr />
        <div className="items-container">
          <ItemOnCart />
          <ItemOnCart />
          <ItemOnCart />
        </div>
        <div className="Cart-btn-container">
          <p className="back-btn" onClick={() => goBack()}>
            <i className=" fas fa-chevron-left"></i>
            Return Shopping
          </p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
