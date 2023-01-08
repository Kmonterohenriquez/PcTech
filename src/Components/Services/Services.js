import React, { useState } from 'react';
import './Services.sass';
import { Link } from 'react-router-dom';
import getConsts from '../../utils/consts';

const Services = () => {
	const [filter, setFilter] = useState('');
	const { sectionTitle, sectionDescription, services} = getConsts.ourServices
	 
	let dataFiltered =
		filter === '' ? services : services.filter((curr) => curr.type === filter);
	return (
		<div className='Services'>
			<div className='Services-container sm-container'>
				<h2 className='main-title'>{sectionTitle}</h2>
				<p className='main-desc'>
					{sectionDescription}
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
							<h2>{curr.title}</h2>
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
