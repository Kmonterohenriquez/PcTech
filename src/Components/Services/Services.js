import React, { useState } from 'react';
import './Services.sass';
import { Link } from 'react-router-dom';
import data from './data';
const Services = () => {
	const [filter, setFilter] = useState('');
	let dataFiltered =
		filter === '' ? data : data.filter((curr) => curr.type === filter);
	return (
		<div className='Services'>
			<div className='Services-container sm-container'>
				<h1 className='main-title'>Our Services</h1>
				<p className='main-desc'>
					We are one of the best laptop repairing service provider company in
					Orlando and repair your system at your home/office at very cheapest
					price.
				</p>
				<div className='Services-list'>
					<Link className={filter ===""?"blue":""} onClick={() => setFilter('')}>All</Link>/
					<Link className={filter ==="hardware"?"blue":""} onClick={() => setFilter('hardware')}>hardware</Link> /
					<Link className={filter ==="laptop"?"blue":""} onClick={() => setFilter('laptop')}>laptop</Link> /
					<Link className={filter ==="network"?"blue":""} onClick={() => setFilter('network')}>network</Link> /
					<Link className={filter ==="support"?"blue":""} onClick={() => setFilter('support')}>support</Link> /
					<Link className={filter ==="software"?"blue":""} onClick={() => setFilter('software')}>Software</Link>
				</div>
			</div>
			<div className='All-Services'>
				{dataFiltered.map((curr) => (
					<div className='single-service' key={curr.id}>
						<div className='img-container'>
							<img src={curr.img} alt={curr.title} />
						</div>
						<div className='info'>
							<h1>{curr.title}</h1>
							<p>{curr.desc}</p>
							<button>Learn More</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
