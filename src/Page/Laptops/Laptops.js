import React from 'react';
import './Laptops.sass';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import Card from '../../Components/Card/Card';

const Laptops = () => {
	return (
		<div className='Laptops'>
			<Nav />
			<div className='Laptops-container container'>
				<Title title='Laptops' />
				<Card />
			</div>
		</div>
	);
};

export default Laptops;
