import React from 'react';
import Showcase from '../../Components/Showcase/Showcase';
import WhyUs from '../../Components/WhyUs/WhyUs';
import Who from '../../Components/Who/Who';
import Services from '../../Components/Services/Services';
import Quote from '../../Components/Quote/Quote';
import Footer from '../../Components/Footer/Footer'

const Home = () => {
	return (
		<div className='Home'>
			<Showcase />
			<WhyUs />
			<Who />
			<Services />
			<Quote />
			<Footer />
		</div>
	);
};

export default Home;
