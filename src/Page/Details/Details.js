import React, { useEffect, useState } from 'react';
import './Details.sass';
import Nav from '../../Components/Nav/Nav';
import axios from 'axios';

const Details = (props) => {
  const itemID = props.match.params.id;
  const [mainImg, setMainImg] = useState('');
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    getItemData();
  }, []);

  const getItemData = () => {
    axios
      .get(`/api/products/${itemID}`)
      .then((res) => setItemData(res.data))
      .catch((err) => console.log(err));
  };
  const addCart = async (itemID) => {
    await axios.post(`/api/cart/${itemID}`).catch((err) => console.log(err));
    console.log('Item added!');
  };
  console.log('item ID: ', itemID);
  return (
    <div className='Details'>
      <Nav />
      <div className='Details-container container'>
        {itemData.map((curr) => (
          <div key={itemID} className='flex'>
            <div className='img-container margin-5-r'>
              <div className='sm-img-container'>
                <img
                  className='sm-pic'
                  src={curr.img1}
                  alt=''
                  onClick={() => setMainImg(curr.img1)}
                />
                <img
                  className='sm-pic'
                  src={curr.img2}
                  alt=''
                  onClick={() => setMainImg(curr.img2)}
                />
                <img
                  className='sm-pic'
                  src={curr.img3}
                  alt=''
                  onClick={() => setMainImg(curr.img3)}
                />
                <img
                  className='sm-pic'
                  src={curr.img4}
                  alt=''
                  onClick={() => setMainImg(curr.img4)}
                />
              </div>
              <img className='bg-pic' src={mainImg || curr.img4} alt='' />
            </div>
            <div className='Details-info'>
              <h1>{curr.pc_name}</h1>
              <p>
                <span>Operating System:</span> {curr.os}
              </p>
              <p>
                <span>CPU:</span> {curr.cpu}
              </p>
              <p>
                <span>Graphic card:</span> {curr.graphic_card}
              </p>
              <p>
                <span>Memory RAM:</span> {curr.ram}
              </p>
              <p>
                <span>Motherboard:</span> {curr.motherboard}
              </p>
              <p>
                <span>Storage:</span> {curr.storage}
              </p>
              <div className='Details-btn-container'>
                <h3 className='price'>
                  Price:
                  <span>$</span>
                  {curr.price}
                </h3>
                <button onClick={() => addCart(itemID)}>Add Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
