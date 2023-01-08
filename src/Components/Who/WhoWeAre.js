import React from 'react';
import './WhoWeAre.sass';
import getConsts from '../../utils/consts';

const WhoWeAre = () => {
  const { title, description, img, imgAlt } = getConsts.whoWeAre;
  return (
    <div className='WhoWeAre'>
      <div className='Who-container sm-container'>
        <div className='content'>
          <h2>{title}</h2>
          <p>{description}</p>
          <button>View Services</button>
        </div>
        <img src={img} alt={imgAlt} />
      </div>
    </div>
  );
};

export default WhoWeAre;
