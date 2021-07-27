const fs = require("fs");
const checkUserValidity = require("../../utils/checkUserValidity");
const path = require("path");

function createDirectory(pathname, name){
    fs.mkdirSync(path.join(cwd() + '/repos/' + pathname), { recursive: true }, (err) => {
        if(err) console.log(err, 'error')
        console.log(`Directory ${name} added in ${pathname} successfully`);
    });
};

function createFile(pathname, filename, content){
    const filePath = cwd() + '/repos/' + pathname;
    const fileContent = content ? content: "";
    fs.writeFile(filePath,fileContent , (err) => {
        if(err) console.log("error", err);
        console.log(`File ${filename} added in ${pathname} successfully`)
    });
};

const downloadRepo = async (req, res) => {
    const { tree, userId } = req.body;
    const { isUserValid } = await checkUserValidity(userId);
    if(!isUserValid){
        res.send("User not found, please login to continue");
        return
    }else {
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
        walkTree(tree);
        directories.map(item => {
            createDirectory(item.path, item.name)
        });
        files.map(item => {
            createFile(item.path, item.name, item.content)
        });
        const dirBuffer = await zipdir(cwd() + '/repos/root');
        res.write(dirBuffer, 'buffer');
        res.end(null, 'binary');
    }
};
module.exports = downloadRepo;