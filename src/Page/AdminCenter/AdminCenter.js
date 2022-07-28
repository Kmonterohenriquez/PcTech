import React, { useState, useEffect } from 'react';
import './AdminCenter.sass';
import AddProductModal from '../../Components/AddProductModal/AddProductModal';
import AdminCenterNav from '../../Components/AdminCenterNav/AdminCenterNav';
import axios from 'axios';

const AdminCenter = () => {
  const [addBtn, setAddBtn] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  function AddBtnToggle() {
    setAddBtn(!addBtn);
  }

  useEffect(() => {
    getAllProducts();
    console.log('useEffect updated');
  }, []);

  const getAllProducts = () => {
    axios.get('/api/products').then((res) => {
      setAllProducts(res.data);
    });
  };

  const deleteProduct = async (id) => {
	console.log("test - ID", id)
    await axios.delete(`/api/products/${id}`).catch((err) => console.log(err));
    getAllProducts();
  };

  return (
    <div className='AdminCenter'>
      <AdminCenterNav />
      {addBtn ? (
        <>
          <div className='unclickable' onClick={() => setAddBtn(!addBtn)}></div>
          <AddProductModal AddBtnToggle={AddBtnToggle} />
        </>
      ) : null}
      <div className='AdminCenter-container sm-container'>
        <div className='header-container'>
          <h1 className='title'>Admin Center</h1>
          <button className='add-btn' onClick={() => setAddBtn(!addBtn)}>
            <i className='fas fa-plus'></i>Add New
          </button>
        </div>
        <table>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
          {allProducts.map((curr) => (
            <tr key={curr.product_id}>
              <td>{curr.pc_name}</td>
              <td>{curr.qty} units</td>
              <td>${curr.price}</td>
              <td className='btn-col'>
                <button
                  className='btn delete-btn'
                  onClick={() => deleteProduct(curr.product_id)}
                >
                  Delete
                </button>
              </td>
              <td className='btn-col'>
                <button className='btn edit-btn'>Edit</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AdminCenter;
