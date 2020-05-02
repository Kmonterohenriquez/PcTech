require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	productsCtrl = require('./controllers/productCtrl'),
	app = express();

app.use(express.json());

// MASSIVE
massive(CONNECTION_STRING)
	.then((db) => {
		app.set('db', db);
		console.log('db connected');
	})
	.catch((err) => console.log(err));

const port = SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
