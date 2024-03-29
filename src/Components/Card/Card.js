import React from 'react';
import './Card.sass';
import camera from '../../img/camera-icon.png';
const Card = (props) => {
  let { pc_name, os, cpu, graphic, ram, motherboard, storage, price, images } =
    props.data;

    const imgToShow =  images && images[0] && images[0].length > 0? images[0] : camera;

  return (
    <div className='Card'>
      <div className='img-container'>
        <img
          src={imgToShow}
          alt={pc_name}
          className={imgToShow === camera ? 'camera-icon' : ''}
        />
      </div>
      <div className='info'>
        <p className='title'> {pc_name}</p>
        <p className='os'>{os}</p>
        <p className='cpu'>{cpu}</p>
        <p className='graphic'>{graphic}</p>
        <p className='ram'>{ram}</p>
        <p className='motherboard'>{motherboard}</p>
        <p className='storage'>{storage}</p>
      </div>
      <div className='bottom-container'>
        <p className='price'>$ {price}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Card;
