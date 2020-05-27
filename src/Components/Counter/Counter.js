import React from 'react';
import './Counter.sass';
const Counter = () => {
	return (
		<div className='Counter'>
			<div className='box'>
				<i className='far fa-smile-beam'></i>
                <p className='number'>2190</p>
                <p className="desc">Happy customers</p>
			</div>
			<div className='box'>
				<i className='fas fa-laptop'></i>
                <p className='number'>1098</p>
                <p className="desc">Laptop repaired</p>
			</div>
			<div className='box'>
				<i className='fas fa-desktop'></i>
                <p className='number'>1470</p>
                <p className="desc">Computer repaired</p>
			</div>
			<div className='box'>
				<i className='fab fa-windows'></i>
                <p className='number'>761</p>
                <p className="desc">OS installed</p>
			</div>
		</div>
	);
};

export default Counter;
