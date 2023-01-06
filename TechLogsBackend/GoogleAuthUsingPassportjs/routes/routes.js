const express = require('express');
const router = express.Router();
const passport = require("passport");

router.get(
	"/v1/auth/google",
	passport.authenticate("google", {
		session: false,
		scope: ["profile", "email"],
	})
);

router.get('/', (req, res) => {
    res.send('Welcome to basic express setup repository')
});

module.exports = router;
