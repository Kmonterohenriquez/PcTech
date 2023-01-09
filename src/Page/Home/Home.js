import React from 'react';
import Showcase from '../../Components/Showcase/Showcase';
import WhyUs from '../../Components/WhyUs/WhyUs';
import Who from '../../Components/Who/WhoWeAre';
import Services from '../../Components/Services/Services';
import Quote from '../../Components/Quote/Quote';

import Counter from '../../Components/Counter/Counter';
import Testimonials from '../../Components/Testimonials/Testimonials'

const Home = () => {
	return (
		<div className='Home'>
			<Showcase />
			<WhyUs />
			<Who />
			<Services />
			<Counter />
			<Testimonials />
			<Quote />
		</div>
	);
};

export default Home;
