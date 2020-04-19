import React from 'react';
import './WhyUs.sass';
import info from './info.js';

const WhyUs = () => {
	console.log(info);
	return (
		<div className='WhyUs'>
			<h1>Why Choose Us</h1>
			<p>Fastest repair service with best prices!</p>
			<div className='sm-container box-container'>
                {info.map(box => (
                    <div className='box'>
                        <div className="circle">
                            <i className={box.icon}></i>
                        </div>
                        <p className='title'>{box.title}</p>
                        <p className='description'>{box.description}</p>
                        <div className="btn-container">
                            <a className="read-me-btn" href={box.link}> Read more</a>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                ))}
                
            </div>
		</div>
	);
};

export default WhyUs;
