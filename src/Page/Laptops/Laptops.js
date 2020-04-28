import React from 'react';
import './Laptops.sass';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';

const Laptops = () => {
	return (
		<div className='Laptops'>
			<Nav />
			<div className='Laptops-container'>
				<Title title='Laptops' />
			</div>
		</div>
	);
};

export default Laptops;
