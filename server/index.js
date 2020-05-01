require('dotenv').config();
const express = require('express'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	app = express();

app.use(express.json());

const port = SERVER_PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
