import Axios from 'axios';
import React, { useState } from 'react';
import './AddProductModal.sass';

const AddProductModal = (props) => {
  const [state, setState] = useState({
    id: '',
    name: '',
    qty: 1,
    description: '',
    pd_type: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    price: 0,
    os: '',
    cpu: '',
    gpu: '',
    ram: '',
    motherboard: '',
    storage: '',
  });

  function handleChange(evt) {
    const value = evt.target.value;
    console.log("value from FE: ", value)
    setState({
      ...state,
      [evt.target.name]: value,
    });

  }
  const addItem = async () => {
    const {
      name,
      qty,
      description,
      pd_type,
      price,
      os,
      cpu,
      gpu,
      ram,
      motherboard,
      storage,
      img1,
      img2,
      img3,
      img4,
      img5,
    } = state;

    await Axios.post('/api/products', {
      pc_name: name,
      qty,
      description,
      pd_type,
      price,
      os,
      cpu,
      graphic_card: gpu,
      ram,
      motherboard,
      storage,
      img1,
      img2,
      img3,
      img4,
      img5,
    })
      .then((res) => {
        console.clear();
        console.log('Product added!');
        console.log('response', res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='AddProductModal'>
      <i className='close-icon fas fa-times' onClick={props.AddBtnToggle}></i>
      <h1>Add Product</h1>
      <hr />
      <form action=''>
        <div className='left-side'>
          <label htmlFor=''>Image 1</label>
          <input
            type='text'
            placeholder='Insert Image 1'
            name='img1'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor=''>Image 2</label>
          <input
            type='text'
            placeholder='Insert Image 2'
            name='img2'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor=''>Image 3</label>
          <input
            type='text'
            placeholder='Insert Image 3'
            name='img3'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor=''>Image 4</label>
          <input
            type='text'
            placeholder='Insert Image 4'
            name='img4'
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor=''>Image 5</label>
          <input
            type='text'
            placeholder='Insert Image 5'
            name='img5'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='right-side'>
          <div className='side'>
            <label htmlFor=''>Type</label>
            <select name='pd_type' id='' onChange={(e) => handleChange(e)}>
              <option value=''>Choose one</option>
              <option value='laptop'>Laptop</option>
              <option value='desktop'>Desktop</option>
            </select>
            <label htmlFor=''>Product Name</label>
            <input
              type='text'
              placeholder='Enter a Name'
              name='name'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=''>Price</label>
            <input
              type='number'
              placeholder='Enter Price'
              name='price'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=''>Quantity</label>
            <input
              className='qty'
              type='number'
              placeholder='Enter quantity'
              name='qty'
              onChange={(e) => handleChange(e)}
              value={state.qty}
            />
            <label htmlFor=''>Operating System</label>
            <input
              type='text'
              placeholder='Enter OS'
              name='os'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=''>CPU</label>
            <input
              type='text'
              placeholder='Enter CPU'
              name='cpu'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=''>Graphic Card</label>
            <input
              type='text'
              placeholder='Enter Graphic Card'
              name='gpu'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=''>Memory Ram</label>
            <input
              type='text'
              placeholder='Enter Memory Ram'
              name='ram'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='side'>
            <label htmlFor=''>Mother Board</label>
            <input
              type='text'
              placeholder='Enter Mother Board'
              name='motherboard'
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor=''>Storage</label>
            <input
              type='text'
              placeholder='Enter Storage'
              name='storage'
              onChange={(e) => handleChange(e)}
            />

            <label>Description</label>
            <textarea
              name='description'
              cols='30'
              rows='10'
              placeholder='Briefly description of the product...'
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>
      </form>
      <div className='btn-container'>
        <button className='btn cancel-btn' onClick={props.AddBtnToggle}>
          Cancel
        </button>
        <button className='btn add-btn' onClick={addItem}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
