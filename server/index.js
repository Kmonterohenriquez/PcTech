require('dotenv').config();
const express = require('express');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());
const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
