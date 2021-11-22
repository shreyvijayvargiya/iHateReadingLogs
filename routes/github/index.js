const axios = require("axios");
const express = require("express");
const githubRouter = express.Router();
const getGithubUser = require("../../controllers/github/getGithubUser");
const connectGithub = require("../../controllers/github/connectGithub");
const createRepository = require("../../controllers/github/createRepository");

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

githubRouter.get('/v1/api/github/login',async (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.clientId}`);
});

githubRouter.get('/v1/api/github/oauth-callback',connectGithub);
githubRouter.get("/v1/api/github/getUser", getGithubUser);

githubRouter.get("/getrepo",async (req, res) => {
    const token = req.headers["authorization"].split(" ")[1];
    if(!token){
        res.send("Token and repository link required")
    }else {
        await axios.get(`https://api.github.com/repos/shreyvijayvargiya/iHateReadingLogs`, 
        { headers: { 'Authorization': `Bearer ${token}` }}
            ).then(res => {
                response.success = true;
                response.data = res.data;
            });
        res.send(response);
    }
});

githubRouter.post("/v1/api/github/create-repository", createRepository);


module.exports = githubRouter;
