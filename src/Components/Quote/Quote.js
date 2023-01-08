import React from 'react';
import './Quote.sass';
import getConsts from '../../utils/consts';

const Quote = () => {
  const { title, teaser, description, formTitle } = getConsts.quote;
  return (
    <div className='Quote'>
      <div className='Quote-container sm-container'>
        <div className='left-side'>
          <h3>{teaser}</h3>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className='right-side'>
          <form action=''>
            <h2>{formTitle}</h2>
            <input type='name' placeholder='Your Name' />
            <input type='email' placeholder='Your Email' />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Give Some Details'
            ></textarea>
            <div className='btn-container'>
              <button>Get a Quote</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
