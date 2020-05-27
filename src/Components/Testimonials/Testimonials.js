import React from 'react';
import './Testimonials.sass';
import Slider from 'react-slick';

const Testimonials = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
        autoplay: true,
		centerMode: true,
        arrows: false,
        autoplaySpeed: 2200,
        slideWidth: 300
	};
	return (
		<div className='Testimonials'>
			<div className='Testimonials-container container'>
				<h1 className='main-title'>What Clients Say?</h1>
				<p className='main-desc'>
					Here are testimonials from clients that we have worked with and are
					happy to share their opinion about the process and the results.
				</p>
				<Slider className='Slider' {...settings}>
					<div>
						<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi voluptate blanditiis, odio nobis consectetur doloremque officia expedita a,</h3>
					</div>
					<div>
						<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi voluptate blanditiis, odio nobis consectetur doloremque officia expedita a,</h3>
					</div>
					<div>
						<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi voluptate blanditiis, odio nobis consectetur doloremque officia expedita a,</h3>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Testimonials;
