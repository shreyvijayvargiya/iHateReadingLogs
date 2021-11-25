const fs = require("fs");
const checkUserValidity = require("../../utils/checkUserValidity");
const path = require("path");
const zipdir = require("zip-dir");
const child_process = require("child_process").execFileSync;
// const data = require('./data');
const _ = require('lodash');
const axios = require('axios');

function createDirectory(pathname, name){
    fs.mkdirSync(path.join(process.cwd() + '/repos/' + pathname), { recursive: true }, (err) => {
        if(err) console.log(err, 'error')
        console.log(`Directory ${name} added in ${pathname} successfully`);
    });
};

function createFile(pathname, filename, content){
    const filePath = process.cwd() + '/repos/' + pathname;
    const fileContent = content ? content: "";
    fs.writeFile(filePath,fileContent , (err) => {
        if(err) console.log("error", err);
        console.log(`File ${filename} added in ${pathname} successfully`)
    });
};
function installDependencies(dependencies){
    const filePath = path.join(process.cwd() + '/repos/' + package.json);
    dependencies.forEach(packageName => {
        child_process(`cd ${filePath} && yarn add ${packageName}`)
    });
}

const downloadRepo = async (req, res) => {
    const { tree, userId } = req.body;
    const { isUserValid } = await checkUserValidity(userId);
    if(!isUserValid){
        res.send("User not found, please login to continue");
        return
    }else {
        if(!tree){
            res.send("JSON tree required");
            return
        }
        let directories = [];
        let files = [];
        if(fs.existsSync(process.cwd() + "/repos/root")){
            fs.rmdirSync(process.cwd() + "/repos/root", { recursive: true });
        };
        function walkTree(tree){
            tree.map(item => {
                if(Array.isArray(item.children)){
                    directories.push(item);
                    walkTree(item.children);
                    return
                }else {
                    files.push(item)
                    return
                }
            });
        };
        walkTree(tree.children);
        directories.map(item => {
            createDirectory(item.path, item.name)
        });
        files.map(item => {
            createFile(item.path, item.name, item.content)
        });
        // installDependencies(dependencies)
        const dirBuffer = await zipdir(process.cwd() + '/repos/root');
        res.set({
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment; filename=repo.zip",
            "Content-Length": dirBuffer.length
        });
        res.send(dirBuffer);
    }
};

const createSandboxTreeFromRepoTree = async(req, res) => {
    const data = req.body.tree;
    let response = {
        error: '',
        message: '',
        data: '',
        status: ''
    };
    let directories = [];
    let files = [];
    function walkTree(tree){
        tree.map(item => {
            if(Array.isArray(item.children)){
                directories.push(item);
                walkTree(item.children);
                return
            }else {
                files.push(item)
                return
            }
        });
    };
    walkTree(data.children);
    const sandBoxTree = {};
    try {
        files.map(item => {
            const splitArrayLength = (item.path).split('/').length;
            const joinPath = ((item.path).split('/')).slice(1, splitArrayLength).join('/');
            sandBoxTree[joinPath] = { 'content': item.content };
        });
        const body = { "files": { ...sandBoxTree }};
        await axios.post(process.env.CODE_SANDBOX_API, body, { headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }}).then(resp => {
            response.data = resp.data;
            response.status = 200;
        }).catch(error => {
            console.log(error, 'error')
            throw error;
            return
        });
        // path will the name and content will be content
        res.status(200).send(response);
    }catch(error) {
        res.send(error.message);
    }
}
module.exports = { downloadRepo, createSandboxTreeFromRepoTree };