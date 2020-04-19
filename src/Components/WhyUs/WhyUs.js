import React from 'react';
import './WhyUs.sass';
import info from './info.js';

const WhyUs = () => {
	console.log(info);
	return (
		<div className='WhyUs'>
			<h1>Why Choose Us</h1>
			<p>Fastest repair service with best prices!</p>
			<div className='container'>
                {info.map(box => (
                    <div className='box'>
                        <div className='title'>{box.title}</div>
                        <div className='description'>{box.description}</div>
                        <a className="read-me-btn" href={box.link}> Read more</a>
                    </div>
                ))}
                ;
            </div>
		</div>
	);
};

export default WhyUs;
