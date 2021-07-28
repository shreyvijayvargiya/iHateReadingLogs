const express = require('express');
const router = require('./routes/routes');
const githubRouter = require("./routes/github");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors");
const admin = require('firebase-admin');

dotenv.config();

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

admin.initializeApp({
    credential: admin.credential.cert("./service-account-file.json"),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
})
server.use(router);


server.listen(process.env.PORT || 3001, () => console.log('Server is running on port 3000'));