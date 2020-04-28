import React from 'react';
import './Location.sass';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import Footer from '../../Components/Footer/Footer';

const Location = () => {
	return (
		<div className='Location'>
			<Nav />
			<div className='Location-container sm-container'>
				<Title title='Location' />
				<p className='phrase'>We are located in every corner of the United States</p>
				<div className='sides-container'>
                    <div className='left-side'>
                        <div className='box'>
                            <p className='place'>Orlando</p>
                            <p className='address'>123 Main Street Orlando, Fl. 9876</p>
                            <p className='tel'>(123) 456-7890</p>
                        </div>
                        <div className='box'>
                            <p className='place'>New York</p>
                            <p className='address'>123 Main Street New York, Fl. 9876</p>
                            <p className='tel'>(123) 456-7890</p>
                        </div>
                        <div className='box'>
                            <p className='place'>Colorado</p>
                            <p className='address'>123 Main Street Colorado, Fl. 9876</p>
                            <p className='tel'>(123) 456-7890</p>
                        </div>
                    </div>
                    <div className='right-side'>
                        <img
                            src='https://www.bluestarindia.com/media/203216/location-640x329.jpg'
                            alt=''
                        />
                    </div>
                </div>
			</div>
			<Footer />
		</div>
	);
};

export default Location;
