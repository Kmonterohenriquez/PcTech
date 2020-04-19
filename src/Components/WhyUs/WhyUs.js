import React from 'react';
import './WhyUs.sass';
import info from './info.js';

const WhyUs = () => {
	console.log(info);
	return (
		<div className='WhyUs'>
			<h1>Why Choose Us</h1>
			<p>Fastest repair service with best prices!</p>
			<div className='container box-container'>
                {info.map(box => (
                    <div className='box'>
                        <div className="circle"></div>
                        <p className='title'>{box.title}</p>
                        <p className='description'>{box.description}</p>
                        <a className="read-me-btn" href={box.link}> Read more<i className="fas fa-chevron-right"></i></a>
                    </div>
                ))}
                
            </div>
		</div>
	);
};

export default WhyUs;
