import React, { useEffect, useState } from 'react';
import './Products.sass';
import Card from '../../Components/Card/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = (props) => {
  const itemType = props.match.params.itemsType;
  const [allItems, setAllItems] = useState([]);

  if (process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL = 'https://pctech-website.onrender.com';
  }

  const getAllItems = async () => {
    axios.get(`/api/products/${itemType}/`).then((res) => {
      setAllItems(res.data);
    });
  };

  const itemsToShow = itemType === 'desktops' ? 'Desktops' : 'Laptops';
  useEffect(() => {
    getAllItems();
    console.log('useEffect updated');
  }, [itemType]);

  useEffect(() => {
    getAllItems();
  }, []);

  console.log("allItems: ", allItems)
  return (
    <div className='Products'>
      <div className='Products-container container'>
        <h1 className='Products-title'>{itemsToShow}</h1>
        <div className='grid-container'>
          {allItems.map((curr) => (
            <Link key={curr.product_id} to={`/details/${curr.product_id}`}>
              <Card data={curr} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
