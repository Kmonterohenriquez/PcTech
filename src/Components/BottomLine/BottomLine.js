import React from 'react';
import './BottomLine.sass';
const BottomLine = () => {
	return (
		<div className='BottomLine '>
			<div className=' BottomLine-container container'>
				<p>
					© Copyright 2020. Design by{' '}
					<a href='https://kevinmontero.com/'>Kevin Montero</a>
				</p>
				<div className='small-menu'>Home / About Us / Contact Us</div>
			</div>
		</div>
	);
};

export default BottomLine;
