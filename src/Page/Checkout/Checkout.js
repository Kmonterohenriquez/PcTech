import React from 'react';
import './Checkout.sass';
import { Link } from 'react-router-dom';
// import Axios from 'axios';
import countriesData from './countriesData'

const Checkout = () => {
  // const [state, setState] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   country: '',
  //   state: '',
  //   street: '',
  //   zipCode: 0,
  // });

  // function handleChange(evt) {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value,
  //   });
  // }

  // const addUser = async () => {
  //   const { firstName, lastName, email, country, state, street, zipCode } =
  //     state;

  //   await Axios.post('/api/users', {
  //     firstName,
  //     lastName,
  //     email,
  //     country,
  //     state,
  //     street,
  //     zipCode,
  //   }).catch((err) => console.log(err));
  // };

  return (
    <div className='Checkout'>
      <div className='Billing-container container'>
        <h1>Billing details</h1>
        <form>
          <div className='form-group'>
            <label htmlFor=''>Firstname</label>
            <input type='text' placeholder='Enter name' />
            <label htmlFor=''>Lastname</label>
            <input type='text' placeholder='Enter name' />
            <label htmlFor=''>Email address</label>
            <input type='text' placeholder='Enter email' />
            <label htmlFor=''>Country</label>
            <select id='country' name='country'>
              <option value=''>Choose a country</option>
              {countriesData.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <label htmlFor=''>State/ County</label>
            <input type='text' placeholder='Enter county' />
            <label htmlFor=''>Zip/ postal code</label>
            <input type='text' placeholder='Enter ZIP code' />
          </div>
        </form>
      </div>
      <div className='btn-container'>
        <Link to="/cart" className='back'>Back to cart</Link>
        <Link to="/invoice" className='next'>Payment method</Link>
      </div>
    </div>
  );
};

export default Checkout;
