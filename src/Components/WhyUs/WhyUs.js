import React from 'react';
import './WhyUs.sass';
import info from './info.js';

const WhyUs = () => {
	return (
		<div className='WhyUs'>
			<h1>Why Choose Us</h1>
			<p>Fastest repair service with best prices!</p>

			<div className='box'>
				<div className='title'>Title here</div>
				<div className='description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit
					risus, aliquam id velit non, congue iaculis metus. Aliquam erat
					volutpat.
				</div>
				<a>Read more</a>
			</div>
		</div>
	);
};

export default WhyUs;
