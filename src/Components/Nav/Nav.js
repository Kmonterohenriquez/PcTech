import React from 'react';
import './Nav.sass';
import blue_logo from '../../img/blue_logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='Nav'>
			<div className='Nav-container container'>
				<img src={blue_logo} alt='PC tech blue logo' />
				<nav>
					<ul>
						<Link>Laptops</Link>
						<Link>Desktop</Link>
						<Link>Location</Link>
						<Link>About Us</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
