const axios = require("axios");

let response = {
    token: String,
    success: Boolean,
    message: String,
    data: {},
};

const connectGithub = async(req, res) => {
    const body = {
        client_id: process.env.clientId,
        client_secret: process.env.clientSecret,
        code: req.query.code
    };
    console.log(req, "req path");
    await axios.post(process.env.GITHUB_LOGIN_URL, body, { headers: { accept: 'application/json' } })
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
    // res.send({ success: true, data: { message: "Github Connected successfully"}});
    res.redirect(`http://localhost:3000/createrepo`);
};
module.exports = connectGithub;
