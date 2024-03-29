import React, { useEffect, useState } from 'react';
import './Nav.sass';
import blue_logo from '../../img/blue_logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Nav = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCart();
    console.log('useEffect updated!');
  }, []);

  if (process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL = 'https://pctech-website.onrender.com';
  }

  const getCart = () => {
    axios.get('/api/cart/').then((res) => setCart(res.data.length));
  };

  return (
    <div className='Nav'>
      <div className='Nav-container container'>
        <Link to='/'>
          <img src={blue_logo} alt='PC tech blue logo' />
        </Link>
        <nav>
          <ul>
            <Link to='/products/laptops/'>Laptops</Link>
            <Link to='/products/desktops/'>Desktops</Link>
            <Link to='/location/'>Location</Link>
            <Link to='/about_us/'>About Us</Link>
            <Link to='/cart/' className='cart'>
              <i className='fas fa-shopping-cart'>
                <p className='item-num'>{cart}</p>
              </i>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
