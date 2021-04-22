const axios = require('axios');
const express = require('express');
const githubRouter = express.Router();

githubRouter.get('/', (req, res) => res.send('Hello'));

githubRouter.get('/login',async (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.clientId}&scope=repo`);
});


let response = {
    token: String,
    success: Boolean,
    message: String,
    data: {},
};
githubRouter.get('/githubAuth/oauth-callback', async(req, res) => {
    try {
        const body = {
            client_id: process.env.clientId,
            client_secret: process.env.clientSecret,
            code: req.query.code
        };
        await axios.post('https://github.com/login/oauth/access_token', body, { headers: { accept: 'application/json' } })
        .then(res => {
            if(res.data && res.data.access_token){
                response.token = res.data.access_token;
                response.success = true;
            }else {
                response.success = false;
                response.message = 'Error in authorization';
                response.token = '';
            }
        });
        res.cookie('githubToken', response.token);
        res.redirect(`http://localhost:3000/result`);
    }catch(e){
        res.send(e);
    }

});



githubRouter.get('/getRepos',async (req, res) => {
    const headers = req.headers['authorization'];
    if(!headers){
        response.success = false;
        response.message = 'Authorization required';
    }else {
        const token = headers.split(' ')[1];
        await axios.get('https://api.github.com/user/repos', 
            { headers: { 'Authorization': `Bearer ${token}` }}
        ).then(res => {
            response.success = true;
            response.data = res.data;
        });
    }
    res.send(response);
});

githubRouter.get('/getUser', async(req, res) => {
    const headers = req.headers['authorization'];
    if(!headers){
        response.success = false;
        response.message = 'Authorization required';
    }else {
        const token = headers.split(' ')[1];
        await axios.get('https://api.github.com/user', { headers: {
            'Authorization': `Bearer ${token}`
        }}).then(res => {
            response.data = res.data;
            response.success = true;
        });
    }
    res.send(response);
})

module.exports = githubRouter;


