import React from 'react';
import logo from '../../img/logo.png';
const Footer = () => {
	return (
		<div className='Footer'>
			<div className='container'>
				<div className='side'>
					<img src={logo} alt='PC Tech' />
					<p>
						Being the best in our field means that we are committed to every
						project, we have ingenious ideas that become reality and we make
						every client happy.
					</p>
				</div>
				<div className='side'>
					<h1>Our services</h1>
					<ul>
						<li>Laptop Repair</li>
						<li>Desktop Repair</li>
						<li>Sell PC hardware</li>
						<li>Sell Desktop</li>
						<li>Sell Desktop</li>
					</ul>
				</div>
				<div className='side'>
					<h1>Contact Us</h1>
					<p className='address'>123 Main Street Orlando, Fl. 9876</p>
					<p className='phone'>(123) 456-7890</p>
					<p className='fax'>(123) 456-7777</p>
					<p className='email'>info@yourdomain.com</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
