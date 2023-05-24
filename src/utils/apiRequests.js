import axios from 'axios';

const addCart = async (itemID) => {
  if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://pctech-website.onrender.com';
  }

  await axios.post(`/api/cart/${itemID}`).catch((err) => console.log(err));
  console.log('Item added!');
};

export { addCart };
