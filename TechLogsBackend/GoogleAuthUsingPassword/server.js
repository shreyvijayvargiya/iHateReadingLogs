const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const passport = require("./middlewares/passport");

dotenv.config();

const server = express();

// Initialize the middlewares
server.use(passport.initialize());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


// Add routes
server.use(router);



server.listen(3000, () => console.log('Server is running on port 3000'));