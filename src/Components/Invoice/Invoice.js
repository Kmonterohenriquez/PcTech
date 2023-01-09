import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Invoice = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);

  const getCart = async () => {
    await Axios.get('/api/cart/')
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };

  const getUser = async () => {
    await Axios.get('/api/users/')
      .then((res) => setUser(res.user))
      .catch((err) => console.log(err));
  };

  // Initialization
  useEffect(() => {
    getCart();
    getUser();
  }, []);

  const filtertedCart = cart.filter(
    (v, i, a) => a.findIndex((v2) => v2.product_id === v.product_id) === i
  );

  const { firstName, lastName, country, email, state, street, zipCode } = user;
  const { pc_name, qty, price } = filtertedCart;

  const totalPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price
  );

  let currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <div className='invoice-container'>
        <h1>Invoice</h1>
        <p>Order placed: {currentDate}</p>

        <strong>Item List</strong>
        {filtertedCart.map((item, i) => (
          <div className='item' key={i}>
            <p>{pc_name}</p>
            <p>{qty}</p>
            <p>{price}</p>
            <p>{totalPrice}</p>
          </div>
        ))}
        <strong>Billing information</strong>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>
        <p>
          {street}
          {state}
          {zipCode}
        </p>
        <p>{country}</p>

        <strong>Order total</strong>
      </div>
    </div>
  );
};

export default Invoice;
