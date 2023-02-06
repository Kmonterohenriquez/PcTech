import React, { useState, useEffect } from 'react';
import './Cart.sass';
import logo from '../../img/blue_logo.png';
import ItemOnCart from '../../Components/ItemOnCart/ItemOnCart';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  const goBack = () => props.history.goBack();
  const getCart = async () => {
    await axios
      .get('/api/cart/')
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };

  // Initialization
  useEffect(() => {
    console.log('use effect udpated');
    getCart();
  }, []);

  // Update on Cart Change
  useEffect(() => {
    // getCart();
    console.log('use effect udpated');
  }, [cart]);

  const filtertedCart = cart.filter(
    (v, i, a) => a.findIndex((v2) => v2.product_id === v.product_id) === i
  );

  return (
    <div className='Cart container'>
      <div className='header'>
        <img src={logo} onClick={() => goBack()} alt='' className='logo' />
        <h1 className='title'>Shopping Cart</h1>
        <hr />
        <div className='items-container'>
          {filtertedCart.map((item) => (
            <ItemOnCart key={item.product_id} data={item} getCart={getCart} />
          ))}
        </div>
        <div className='Cart-btn-container'>
          <p className='back-btn' onClick={() => goBack()}>
            <i className=' fas fa-chevron-left'></i>
            Return Shopping
          </p>
          <Link to='/checkout'>
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
