const express = require('express');
const router = express.Router();
const firebaseLogin = require('../controllers/login/firebaseLogin');
const downloadRepo = require("../controllers/repo/downloadRepo");

router.get('/', (req, res) => {
    res.send('Welcome to basic express setup repository');
});
router.get("/v1/custom-repo/login", firebaseLogin);

router.get("/v1/custom-repo/download-repo", downloadRepo);

module.exports = router;

