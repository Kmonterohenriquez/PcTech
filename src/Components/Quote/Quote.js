import React from 'react';
import './Quote.sass'
const Quote = () => {
	return (
		<div className='Quote'>
			<div className='Quote-container sm-container'>
				<div className='left-side'>
					<h3>Multi Brand</h3>
					<h1>Sell & Repair</h1>
					<p>
						elit risus, aliquam id velit non, congue iaculis metus. Aliquam erat
						volutpat. Nam tempus, dui a lobortis efficitur, purus orci pretium
						nulla, sed posuere massa nulla id orci. Duis sit amet ante vel ante
						rutrum mollis quis ac odio. Donec rutrum libero non sagittis
						venenatisrutrum mollis quis ac odio. Donec rutrum libero non sagittis
						venenatis
					</p>
				</div>
				<div className='right-side'>
					<form action=''>
						<h1>Get a Free Quote</h1>
						<input type='name' placeholder='Your Name' />
						<input type='email' placeholder='Your Email' />
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Give Some Details'
						></textarea>
						<div className='btn-container'>
                            <button> Get a Quote</button>
                        </div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Quote;
