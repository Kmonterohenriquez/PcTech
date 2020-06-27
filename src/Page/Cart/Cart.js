import React, { useState, useEffect } from "react";
import "./Cart.sass";
import logo from "../../img/blue_logo.png";
import ItemOnCart from "../../Components/ItemOnCart/ItemOnCart";
import axios from "axios";

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  const goBack = () => props.history.goBack();
  const getCart = async () => {
    await axios
      .get("/api/cart/")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };
 
  console.log("cart from cart:", cart);
  // Initialization
  useEffect(() => {
    getCart();
  }, []);
  const filterted = cart.filter((el) => el.product_id === 2);
  console.log("filterted: ", filterted);
  return (
    <div className="Cart container">
      <div className="header">
        <img src={logo} onClick={() => goBack()} alt="" className="logo" />
        <h1 className="title">Your Shopping Cart</h1>
        <hr />
        <div className="items-container">
          {cart.map((item) => (
            <ItemOnCart data={item} />
          ))}
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
