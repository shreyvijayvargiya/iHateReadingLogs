const axios = require("axios");
const express = require("express");
const githubRouter = express.Router();


let response = {
    token: String,
    success: Boolean,
    message: String,
    data: {},
};

githubRouter.get('/', (req, res) => { 
    console.log(process.env.clientId)
    res.send('Hello');
});

githubRouter.get('/login',async (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.clientId}&scope=repo`);
});

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
                console.log(res, 'ress')
                response.success = false;
                response.message = 'Error in authorization';
                response.token = '';
            }
        });
        res.send(JSON.stringify(response))
        // res.cookie('githubToken', response.token);
        // res.redirect(`http://localhost:3000/result`);
    }catch(e){
        res.send(e);
    }

});

githubRouter.get("/getrepo",async (req, res) => {
    const { repo } = req.body;
    const token = req.headers["authorization"].split(" ")[1];
    if(!token){
        res.send("Token and repository link required")
    }else {
        https://github.com/shreyvijayvargiya/iHateReadingLogs/archive/refs/heads/main.zip
        await axios.get(`https://api.github.com/repos/shreyvijayvargiya/iHateReadingLogs`, 
        { headers: { 'Authorization': `Bearer ${token}` }}
            ).then(res => {
                response.success = true;
                response.data = res.data;
            });
        res.send(response);
    }
});


module.exports = githubRouter;
