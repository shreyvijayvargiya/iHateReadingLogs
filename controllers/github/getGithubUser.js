const axios = require("axios");

let response = {
    success: Boolean,
    message: String,
    data: {},
};

const getGithubUser = async(req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if(!token){
        response.success = false;
        response.message = 'Authorization required';
    }else {
        await axios.get('https://api.github.com/user', { headers: {
            'Authorization': `Bearer ${token}`
        }}).then(res => {
            response.data = res.data;
            response.success = true;
            response.message = "";
        }).catch(error => {
            response.success = false;
            response.message = error.message;
            response.data = {};
        });
    }
    res.send(response);
}

module.exports = getGithubUser;
