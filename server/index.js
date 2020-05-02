require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	productsCtrl = require('./controllers/productCtrl'),
	app = express();

app.use(express.json());

// MASSIVE -v 3.1.4
massive(CONNECTION_STRING)
	.then((db) => {
		app.set('db', db);
		console.log('db connected');
	})
	.catch((err) => console.log(err));

// ENDPOINTS
app.get('/api/products', productsCtrl.getAllProducts);
app.get('/api/products/:product_id', productsCtrl.getOneProduct);

const port = SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
