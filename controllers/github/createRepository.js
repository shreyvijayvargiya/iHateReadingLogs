const axios = require("axios");
const fs = require("fs");
const path = require("path");

let responseBody = {
    success: Boolean,
    message: String,
    data: {},
    error: Boolean
};


const createRepository = async(req, res) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    const { name } = req.body;
    if(!name){
        responseBody.error = true;
        responseBody.message = "Name required"
    }
    if(!token){
        responseBody.error = true;
        responseBody.message = "Unauthorised user"
    }else {
        // const dirPath = fs.readFileSync(path.join(process.cwd() + '/repos/root'));
        axios.post("https://api.github.com/user/repos", { headers: {
            'Authorization': `Bearer ${token}`
        }}, { params : { name: name }}).then(data => {
            console.log("data", data)
        }).catch(error => console.log(error, 'error'));
        res.send("done");
    }

};
module.exports = createRepository;
