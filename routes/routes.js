const { default: axios } = require('axios');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const firebaseLogin = require('../controllers/login/firebaseLogin');
const downloadRepo = require("../controllers/repo/downloadRepo");
const exec = require('child_process').execSync;


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

router.get("/push-to-github", (req, res) => {
    const cmd = `cd repos/root & git remote set-url --add origin ${process.env.GITHUB_MONO_REPO_URL} && git add . && git commit && git push`
    exec(cmd, (err, stdout, stderr) => {
        if(err) console.log(err, 'error')
        if(stdout) console.log(stdout, 'stdout')
    });
    res.send('Done')
})
module.exports = router;

