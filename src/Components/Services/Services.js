import React from 'react';
import './Services.sass';
import {Link} from 'react-router-dom'
import data from './data'
const Services = () => {
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
					<Link>All</Link>/
					<Link>hardware</Link> /
					<Link>laptop</Link> /
					<Link>network</Link> /
					<Link>support</Link> /
					<Link>Software</Link>
				</div>
			</div>
				<div className='All-Services'>
					{data.map((curr) =>(
						<div className='single-service' key={curr.id}>
							<img src={curr.img} alt={curr.title}/>
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
