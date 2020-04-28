import React from 'react';
import './Card.sass';

const Card = props => {
	console.log('from card', props.data);
	let { img, title, os, cpu, graphic, ram, motherboard, storage } = props.data;
	return (
		<div className='Card'>
			<img src={img} alt='' />
			<div className='info'>
				<p className='title'> {title}</p>
				<p className='os'>{os}</p>
				<p className='text'>{cpu}</p>
				<p className='text'>{graphic}</p>
				<p className='text'>{ram}</p>
    <p className='text'>{motherboard}</p>
    <p className='text'>{storage}</p>
			</div>
			<div className='bottom-container'>
				<p className='price'>$ 1235</p>
				<button>Buy</button>
			</div>
		</div>
	);
};

export default Card;
