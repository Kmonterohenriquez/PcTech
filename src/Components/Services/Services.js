import React from 'react';
import './Services.sass';
import {Link} from 'react-router-dom'
const Services = () => {
	return (
		<div className='Services'>
			<div className='Services-container sm-container'>
				<h1>Our Services</h1>
				<p>
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
		</div>
	);
};

export default Services;
