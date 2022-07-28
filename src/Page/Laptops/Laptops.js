import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Laptops.sass';
import Nav from '../../Components/Nav/Nav';
import Title from '../../Components/Title/Title';
import Card from '../../Components/Card/Card';
import Footer from '../../Components/Footer/Footer';

const Laptops = () => {
	const [allLaptops, setAllLaptops] = useState([])
  useEffect(() => {
    getLaptops();
    console.log('useEffect updated');
  }, []);

  const getLaptops = async () => {
    Axios.get('/api/products/laptops/').then((res) => {
		setAllLaptops(res.data);
    });
  };
  return (
    <div className='Laptops'>
      <Nav />
      <div className='Laptops-container container'>
        <Title title='Laptops' />

        <div className='grid-container'>
          {allLaptops.map((curr) => (
            <Card data={curr} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Laptops;
