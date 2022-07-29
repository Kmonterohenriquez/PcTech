require('dotenv').config();
const express = require('express'),
  massive = require('massive'),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
  productsCtrl = require('./controllers/productCtrl'),
  imagesCtrl = require('./controllers/imagesCtrl'),
  app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));

// MASSIVE -v 3.1.4
massive(CONNECTION_STRING)
  .then((db) => {
    app.set('db', db);
    console.log('db connected');
  })
  .catch((err) => console.log(err));

// Products - ENDPOINTS
app.get('/api/products/', productsCtrl.getAllProducts);
app.get('/api/products/desktops/', productsCtrl.getAllDesktops);
app.get('/api/products/laptops/', productsCtrl.getAllLaptops);
app.get('/api/products/pictures/:product_id', productsCtrl.getPics);
app.get('/api/products/:product_id', productsCtrl.getOneProduct);
app.delete('/api/products/:product_id', productsCtrl.deleteProduct);
app.post('/api/products', productsCtrl.addProduct);
app.post('/api/cart/:product_id', productsCtrl.addCart);
app.put('/api/cart/increase/:product_id', productsCtrl.increaseQty);
app.put('/api/cart/decrease/:product_id', productsCtrl.decreaseQty);
app.get('/api/cart/', productsCtrl.getCart);
app.delete('/api/cart/:product_id', productsCtrl.deleteProductFromCart);

// Images - ENDPOINTS
app.get('/api/images/:product_id', imagesCtrl.getAllImages);
// app.put('/api/products/', productsCtrl.editProduct);

const port = SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
