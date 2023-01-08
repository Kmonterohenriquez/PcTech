import React from 'react';
import './WhyUs.sass';
import getConsts from '../../utils/consts';

const WhyUs = () => {
  const { sectionTitle, sectionDescription, cardsInfo } = getConsts.whyUs;
  return (
    <div className='WhyUs'>
      <h2>{sectionTitle}</h2>
      <p>{sectionDescription}</p>
      <div className='sm-container box-container'>
        {cardsInfo.map((box) => (
          <div className='box' key={cardsInfo.id}>
            <div className='circle'>
              <i className={box.icon}></i>
            </div>
            <p className='title'>{box.title}</p>
            <p className='description'>{box.description}</p>
            <div className='btn-container'>
              <a className='read-me-btn' href={box.link}>
                {' '}
                Read more
              </a>
              <i className='fas fa-chevron-right'></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
