import React from 'react';
import Showcase from '../../Components/Showcase/Showcase';
import WhyUs from '../../Components/WhyUs/WhyUs';
import Who from '../../Components/Who/Who';
import Services from '../../Components/Services/Services';
import Quote from '../../Components/Quote/Quote';
import Footer from '../../Components/Footer/Footer'
import BottomLine from '../../Components/BottomLine/BottomLine'
import Counter from '../../Components/Counter/Counter';

const Home = () => {
	return (
		<div className='Home'>
			<Showcase />
			<WhyUs />
			<Who />
			<Services />
			<Counter />
			<Quote />
			<Footer />
			<BottomLine />
		</div>
	);
};

export default Home;
