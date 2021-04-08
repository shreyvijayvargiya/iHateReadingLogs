const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(204).json({ success: false, message: 'Email and Password is required' })
        return
    }
    const token = jwt.sign({ email: email}, process.env.JWTSecretKey,{expiresIn:'14d'});
    res.status(200).json({
        success: true,
        message: 'User logged in successfully',
        data: { token: token, email: email }
    });
});

authRouter.post('/decodeToken', (req, res) => {
    const { email } = req.body;
    const headers = req.headers['authorization'];
    if(!headers){
        res.send({ success: false, message: 'Token is required'});
        return
    }
    if(!email){
        res.json({ success: false, message: 'Email is required' })
        return
    }
    const token = headers.split(" ")[1];
    const jwtVerifyToken = jwt.verify(token, process.env.JWTSecretKey);
    if(jwtVerifyToken.email !== email){
        res.status(404).json({ success: false, message: 'Invalid token'});
    }
    res.status(200).json({ success: true, data: { token: token, email: email }});
});


module.exports = authRouter;

