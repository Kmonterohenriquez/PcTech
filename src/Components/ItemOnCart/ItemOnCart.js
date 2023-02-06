import React, { useState, useEffect } from 'react';
import './ItemOnCart.sass';
import axios from 'axios';

const ItemOnCart = ({ data, getCart }) => {
  const { pc_name, product_id, price, qty, images } = data;
  const [totalQty, setTotalQty] = useState(qty);
  const [total, setTotal] = useState(price);

  const getTotal = () => setTotal(price * qty);
  useEffect(() => {
    getTotal();
    getCart();
  }, [qty]);

  useEffect(() => {
    getTotal();
    getCart();
  }, []);

  const increaseQty = async (id) => {
    await axios.put(`/api/cart/increase/${id}`).then();
    setTotalQty(qty - 1);
  };

  const decreaseQty = async (id) => {
    await axios.put(`/api/cart/decrease/${id}`).then();
    setTotalQty(qty + 1);
  };

  const deleteProductFromCart = async (id) => {
    await axios.delete(`/api/cart/${id}`);
  };

  const defaultImg =
    'https://www.cyberpowerpc.com/images/cs/icue220t/CS-429-141_400.png';
  const imgToDisplay = images && images[0] ? images[0] : defaultImg;
  
  return (
    <div className='ItemOnCart'>
      <div className='info'>
        <img src={imgToDisplay} alt={pc_name} />
        <div className='item'>
          <h1 className='name'>{pc_name}</h1>
          <p className='ref-number'>Ref. 000{product_id}</p>
        </div>
        <div className='qty-container'>
          <p className='qty'>{qty}</p>
          <div className='btn'>
            <i
              className='plus fas fa-plus'
              onClick={() => increaseQty(product_id)}
            ></i>
            <i
              className='minus fas fa-minus'
              onClick={() => decreaseQty(product_id)}
            ></i>
          </div>
        </div>
        <p className='price'>
          <span>$</span> {total}
        </p>
      </div>
      <div
        className='delete-btn'
        onClick={() => deleteProductFromCart(product_id)}
      >
        <i className=' fas fa-times'></i>
      </div>
    </div>
  );
};

export default ItemOnCart;
