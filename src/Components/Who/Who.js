import React from 'react';
import img from '../../img/who.jpg';
import './Who.sass'
const Who = () => {
	return (
		<div className='Who'>
			<div className='content'>
				<h1>Who We Are </h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit
					risus, aliquam id velit non, congue iaculis metus. Aliquam erat
					volutpat. V
				</p>
				<button>View Services</button>
			</div>
			<img src={img} alt='Man repairing a computer.' />
		</div>
	);
};

export default Who;
