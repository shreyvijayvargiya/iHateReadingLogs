const express = require('express');
const githubRouter = require('./github');
const { route } = require('./github');
const router = express.Router();
const repositoryTree = require("./repoTree");
const fs = require("fs");
const path = require("path");
const { cwd } = require('process');
const zipdir = require("zip-dir");

router.get('/', (req, res) => {
    res.send('Welcome to basic express setup repository');
});

function createDirectory(pathname, name){
    fs.mkdirSync(path.join(cwd() + '/repos/' + pathname), {recursive: true }, (err) => {
        if(err) console.log(err, 'error')
        console.log(`Directory ${name} added in ${pathname} successfully`);
    });
};

function createFile(pathname, filename){
    const filePath = cwd() + '/repos/' + pathname;
    fs.writeFile(filePath, "Hello World", (err) => {
        if(err) console.log("error", err);
        console.log(`File ${filename} added in ${pathname} successfully`)
    });
};

router.get("/tree", async(req, res) => {
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
    walkTree(repositoryTree.children);
    directories.map(item => {
        createDirectory(item.path, item.name)
    });
    files.map(item => {
        createFile(item.path, item.name)
    });
    const dirBuffer = await zipdir(cwd() + '/repos/root');
    res.write(dirBuffer, 'buffer');
    res.end(null, 'bindary')
});

module.exports = router;

