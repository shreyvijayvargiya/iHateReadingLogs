const { default: axios } = require('axios');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const firebaseLogin = require('../controllers/login/firebaseLogin');
const downloadRepo = require("../controllers/repo/downloadRepo");
const exec = require('child_process').exec;

const shellJs = require('shelljs');
const simpleGit = require('simple-git');

const gitSimple = simpleGit();

router.get('/', (req, res) => {
    res.send('Welcome to basic ihatereading-backend repository ');
});
router.get("/v1/custom-repo/login", firebaseLogin);

router.post("/v1/custom-repo/download-repo", downloadRepo);
router.get("/v1/ejs", (req, res) => {
    res.render('server')
});

router.post('/vercel-deploy', (req, res) => {
    const url = process.env.VERCEL_API_PREFIX + '/v12/now/deployments';
    const body = {
        "name": "deployed-by-api",
        "files" : [
        {
            "file": "index.html",
            "data": "<!doctype html>\n<html>\n  <head>\n    <title>A simple deployment with the Vercel API!</title>\n  </head>\n  <body>\n    <h1>Welcome to a simple static file</h1>\n    <p>Deployed with <a href=\"/docs/rest-api\">the Vercel API</a>!</p>\n    </body>\n</html>"
        }
    ],
        "projectSettings": {
            "framework": null
        }
    };
    const headers= {
        "Authorization": `Bearer ${process.env.VERCEL_TOKEN}`
    }
    axios.post(url, headers, body ).then((response) => {
        console.log(response, 'response')
    }).catch(error => console.log(error, 'error' ));
    res.send("Done")
});

router.get('/v1/auth/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/'}),(req, res) => {
    res.cookie('authToken', req.user.token);
    res.redirect('/');
});


router.get('/push-repo', (req, res) => {
    shellJs.cd(process.cwd() + '/repos/root');
    const repo = 'Dummy';
    const username = 'shreyvijayvargiya';
    const password = 'Treyvijay26';
    const githubUrl = 'https://github.com/shreyvijayvargiya/iHateReadingLogs/tree/main/CustomRepos';

    // gitSimple.addConfig('user.email','shreyvijayvargiya26@gmail.com');
    // gitSimple.addConfig('user.name', username);
    
    // Add remore repo url as origin to repo
    gitSimple.init().addRemote('origin', githubUrl);
    // Add all files for commit
    gitSimple.add('.')
        .then(
           (addSuccess) => {
              console.log(addSuccess);
           }, (failedAdd) => {
              console.log('adding files failed');
        });
    // Commit files as Initial Commit
    gitSimple.commit('Intial commit by simplegit')
       .then(
          (successCommit) => {
            console.log(successCommit);
         }, (failed) => {
            console.log('failed commmit');
     });
    // Finally push to online repository
    gitSimple.push('origin','master')
        .then((success) => {
           console.log('repo successfully pushed');
        },(failed)=> {
            console.log(failed)
            console.log('repo push failed');
    });
    res.send('Done')
})
module.exports = router;

