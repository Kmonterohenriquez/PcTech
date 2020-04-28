import React from 'react';
import './Laptops.sass';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import Card from '../../Components/Card/Card';
import data from './laptops_data';
import Footer from '../../Components/Footer/Footer';

const Laptops = () => {
	return (
		<div className='Laptops'>
			<Nav />
			<div className='Laptops-container container'>
				<Title title='Laptops' />

				<div className='grid-container'>
					{data.map(curr => (
						<Card data={curr} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Laptops;
