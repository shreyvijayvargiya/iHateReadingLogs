const express = require('express');
const router = require('./routes/routes');
const githubRouter = require("./routes/github");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors");

dotenv.config();

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

server.use(router);
server.use('/github', githubRouter);

server.listen(3000, () => console.log('Server is running on port 3000'));