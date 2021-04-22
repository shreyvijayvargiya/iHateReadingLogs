const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use(router);


server.listen(3000, () => console.log('Server is running on port 3000'));