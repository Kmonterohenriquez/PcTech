import React from 'react';
import logo from '../../img/logo.png';
import './Footer.sass'

const Footer = () => {
	return (
		<div className='Footer'>
			<div className='Footer-container container'>
				<div className='side-1'>
					<img src={logo} alt='PC Tech' />
					<p>
						Being the best in our field means that we are committed to every
						project, we have ingenious ideas that become reality and we make
						every client happy.
					</p>
				</div>
				<div className='side-2'>
					<h1>Our services</h1>
					<ul>
						<li><i className="fas fa-chevron-right"></i>Laptop Repair</li>
                        <hr/>
						<li><i className="fas fa-chevron-right"></i>Desktop Repair</li>
                        <hr/>
						<li><i className="fas fa-chevron-right"></i>Sell PC hardware</li>
                        <hr/>
						<li><i className="fas fa-chevron-right"></i>Sell Desktop</li>
                        <hr/>
						<li><i className="fas fa-chevron-right"></i>Sell Desktop</li>
					</ul>
				</div>
				<div className='side-3'>
					<h1>Contact Us</h1>
					<p className='address'><i className="fas fa-map-marker-alt"></i>123 Main Street Orlando, Fl. 9876</p>
					<p className='phone'><i className="fas fa-phone-volume"></i>(123) 456-7890</p>
					<p className='fax'><i className="fas fa-print"></i>(123) 456-7777</p>
					<p className='email'><i className="far fa-envelope"></i>info@yourdomain.com</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
