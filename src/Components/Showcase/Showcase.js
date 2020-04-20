import React from 'react';
import bg from '../../img/Showcase.png';
import './Showcase.sass';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Showcase = () => {
	return (
		<div className='Showcase'>
			<nav>
				<ul>
					<Link>Laptops</Link>
					<Link>Desktop</Link>
					<Link>Location</Link>
					<Link>About Us</Link>
					<button>Admin Center</button>
				</ul>
			</nav>
			<img className='showcase-bg' src={bg} alt='Showcase Background' />
            <div className="welcome-container">
                <h1>Welcome to</h1>
                <img className='logo' src={logo} alt="PC Tech logo"/>
            </div>
		</div>
	);
};

export default Showcase;
