import React from 'react';
import './Nav.sass';
import blue_logo from '../../img/blue_logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='Nav'>
			<div className='Nav-container container'>
				<Link to='/'>
					<img src={blue_logo} alt='PC tech blue logo' />
				</Link>
				<nav>
					<ul>
						<Link to='/laptops'>Laptops</Link>
						<Link to='/desktops'>Desktops</Link>
						<Link>Location</Link>
						<Link>About Us</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
