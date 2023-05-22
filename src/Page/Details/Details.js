import React, { useEffect, useState } from 'react';
import './Details.sass';
import axios from 'axios';
import { addCart } from '../../utils/apiRequests';

const Details = (props) => {
  const [mainImg, setMainImg] = useState('');
  const [itemData, setItemData] = useState([]);

  const itemID = props.match.params.id;
  const image1 = itemData && itemData.images ? itemData.images[0] : null;

  useEffect(() => {
    getItemData();
  });
  
  const getItemData = () => {
    axios
    .get(`/api/products/${itemID}`)
    .then((res) => setItemData(res.data[0]))
    .catch((err) => console.log(err));
  };
  
  const itemSmallImages =
    itemData.images &&
    itemData.images.map((image,i) => (
      <img
        key={i}
        className='sm-pic'
        src={image}
        alt={itemData.pc_name}
        onClick={() => setMainImg(image)}
      />
    ));

  return (
    <div className='Details'>
      <div className='Details-container container'>
        <div key={itemID} className='flex'>
          <div className='img-container margin-5-r'>
            <div className='sm-img-container'>{itemSmallImages}</div>
            <img className='bg-pic' src={mainImg || image1} alt='' />
          </div>
          <div className='Details-info'>
            <h1>{itemData.pc_name}</h1>
            <p>
              <span>Operating System:</span> {itemData.os}
            </p>
            <p>
              <span>CPU:</span> {itemData.cpu}
            </p>
            <p>
              <span>Graphic card:</span> {itemData.graphic_card}
            </p>
            <p>
              <span>Memory RAM:</span> {itemData.ram}
            </p>
            <p>
              <span>Motherboard:</span> {itemData.motherboard}
            </p>
            <p>
              <span>Storage:</span> {itemData.storage}
            </p>
            <div className='Details-btn-container'>
              <h3 className='price'>
                Price:
                <span>$</span>
                {itemData.price}
              </h3>
              <button onClick={() => addCart(itemID)}>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
