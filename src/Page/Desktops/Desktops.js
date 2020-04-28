import React from 'react';
import './Desktops.sass';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import Card from '../../Components/Card/Card';
import data from './desktops_data';
import Footer from '../../Components/Footer/Footer';

const Desktops = () => {
	return (
		<div className='Desktops'>
			<Nav />
			<div className='Desktops-container container'>
				<Title title='Desktops' />

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

export default Desktops;
