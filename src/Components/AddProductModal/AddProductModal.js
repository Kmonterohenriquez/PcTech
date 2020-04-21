import React, { useState } from 'react';
import './AddProductModal.sass';

const AddProductModal = props => {
	const [name, setName] = useState('');
	const [qty, setQty] = useState(1);
	const [description, setDescription] = useState('');

	function handleQty(e) {
		if (qty < 1) {
			setQty(1);
		} else {
			setQty(e.target.value);
		}
	}
	function showResult() {
		console.clear();
		console.log('Name: ', name);
		console.log('qty: ', qty);
		console.log('Description: ', description);
		props.AddBtnToggle();
	}

	return (
		<div className='AddProductModal'>
			<i className='close-icon fas fa-times' onClick={props.AddBtnToggle}></i>
			<h1>Add Product</h1>
			<hr />
			<form action=''>
				<div className='img-container'>
					<i className='fas fa-plus'></i>
					<img src='' alt='' />
				</div>
				<div className='right-side'>
					<div className='side'>
						<label htmlFor=''>Product Name</label>
						<input
							type='text'
							placeholder='Enter a Name'
							onChange={e => setName(e.target.value)}
						/>
						<label htmlFor=''>Quantity</label>
						<input
							className='qty'
							type='number'
							placeholder='Enter quantity'
							onChange={e => handleQty(e)}
							value={qty}
						/>
						<label htmlFor=''>Operating System</label>
						<input type='text' placeholder='Enter OS' />
						<label htmlFor=''>Graphic Card</label>
						<input type='text' placeholder='Enter Graphic Card' />
						<label htmlFor=''>Memory Ram</label>
						<input type='text' placeholder='Enter Memory Ram' />
					</div>
					<div className='side'>
						<label htmlFor=''>Mother Board</label>
						<input type='text' placeholder='Enter Mother Board' />
						<label htmlFor=''>Storage</label>
						<input type='text' placeholder='Enter Storage' />
						
						<label>Description</label>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Briefly description of the product...'
							onChange={e => setDescription(e.target.value)}
						></textarea>
					</div>
				</div>
			</form>
			<div className='btn-container'>
				<button className='btn cancel-btn' onClick={props.AddBtnToggle}>
					Cancel
				</button>
				<button className='btn add-btn' onClick={showResult}>
					Add
				</button>
			</div>
		</div>
	);
};

export default AddProductModal;
