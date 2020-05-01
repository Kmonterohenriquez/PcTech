import React from 'react';
import './About.sass';
import Nav from '../../Components/Nav/Nav';
import pic_1 from '../../img/kevin.png';
const About = () => {
	return (
		<div className='About'>
			<Nav />
                <h1 className='title'>Who we are</h1>
			<div className='box-container'>
				<div className='box'>

					<img src={pic_1} alt='kevin' />
					<h1>Front-End Developer</h1>
                    <h2>Kevin Montero</h2>
					<p>
						I am a Full-Stack Web Developer who likes to bring ideas to life
						with elegant, attractive, and enjoyable design.
					</p>
					<p className='contact'>
						<span>Portfolio: </span>
						<a href='https://kevinmontero.com/'>Kevinmontero.com</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
