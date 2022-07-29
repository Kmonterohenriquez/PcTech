import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';

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
      .then((res) => setCart(res.user))
      .catch((err) => console.log(err));
  };

  // Initialization
  useEffect(() => {
    getCart();
    getUser();
  }, []);


  const {
    firstName,
    lastName,
    country,
    email,
    state
    street,
    zipCode,

  } = user;
  const filtertedCart = cart.filter(
    (v, i, a) => a.findIndex((v2) => v2.product_id === v.product_id) === i
  );
  let currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <Nav />
      <div className='invoice-container'>
        <h1>Invoice</h1>
        <p>Order placed: {currentDate}</p>

        <strong>Item List</strong>

        <strong>Billing information</strong>
        <p>{username}</p>
        <p>
          {street}
          {state}
          {zipcode}
        </p>
        <p>{country}</p>

        <strong>Order total</strong>
      </div>
    </div>
  );
};

export default Invoice;
