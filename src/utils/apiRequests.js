import axios from 'axios';

const addCart = async (itemID) => {
  await axios.post(`/api/cart/${itemID}`).catch((err) => console.log(err));
  console.log('Item added!');
};

export { addCart };
