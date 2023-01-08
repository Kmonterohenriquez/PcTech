import React from 'react';
import './Counter.sass';
import getConsts from '../../utils/consts';

const Counter = () => {
  return (
    <div className='Counter '>
      <div className='Counter-container sm-container'>
        {getConsts.counter.map((box) => (
          <div className='box' key={box.id}>
            <i className='far fa-smile-beam'></i>
            <p className='number'>{box.number}</p>
            <p className='title'>{box.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
