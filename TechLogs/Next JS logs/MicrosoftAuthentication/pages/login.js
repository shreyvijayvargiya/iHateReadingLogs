import React from 'react';
import { TextField, Button, makeStyles, Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import app from '../utils/firebase';
import { FcGoogle } from 'react-icons/fc';
import firebase from 'firebase';
import { AiOutlineGithub, AiOutlineTwitter, AiFillPhone } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import PhoneNumber from '../modules/PhoneNunber';
import { TiVendorMicrosoft } from 'react-icons/ti';

const Login = () =>{
    const [val, setVal] = React.useState({
        email: '',
        password: '',
    });
    const [showPhone, setShowPhone] = React.useState(false);

    const [loader, setLoader] = React.useState({
        googleLoading: false,
        buttonLoading: false,
        githubLoading: false,
        twitterLoading: false,
        facebookLoading: false,
        microsoftLoading: false
    });
    const [error, setError] = React.useState({
        message: '',
        open: false
    })
    const styles= useStyles();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setVal((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleLoginButton = () => {
        setLoader({ googleLoading: false, buttonLoading: true });
        if(!val.email || !val.password){
            setError({ message: 'Email and Password are required', open: true });
            setLoader({ googleLoading: false, buttonLoading: false });
        }else {
            setError({message:'', open: false });
            app.auth().signInWithEmailAndPassword(val.email, val.password).then((user) => {
                console.log(user)
                setLoader({ googleLoading: false, buttonLoading: false })
            }).catch(error => {
                console.log(error, 'error in loggin in');
                setError({ message: error.message, open: true });
                setLoader({ googleLoading: false, buttonLoading: false });
            })
        }
    };

    const handleGoogleLogin = () => {
        setLoader({ googleLoading: true, buttonLoading: false });
        const auth = firebase.auth();
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider).then((res) => {
            console.log(res.user, 'user');
            setLoader({ googleLoading: false, buttonLoading: false });
          }).catch(error => {
            setLoader({ googleLoading: false, buttonLoading: false });
            console.log(error, 'errror')
        });
    };

    const handleGithubLogin = () => {
        setLoader(prevState => ({ ...prevState, githubLoading: true }));
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(data => {
            console.log(data.credential.accessToken, 'data');
            setLoader(prevState => ({ ...prevState, githubLoading: false }));
        }).catch(e => {
            console.log(e, 'error');
            setLoader(prevState => ({ ...prevState, githubLoading: false }));
        });
    };

    const handleTwitterLogin = () => {
        setLoader(prevState => ({ ...prevState, twitterLoading: true }));
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(data => {
            console.log(data, 'data');
            setLoader(prevState => ({ ...prevState, twitterLoading: false }));
        })
    };
    const handleFacebookLogin = () => {
        setLoader(prevState => ({ ...prevState, facebookLoading: true }));
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(data => {
            console.log(data);
            setLoader(prevState => ({ ...prevState, facebookLoading: false }));
        });
    };
    const handleMicrosoftLogin = () => {
        setLoader(prevState => ({ ...prevState, microsoftLoading: true }));
        const provider = new firebase.auth.OAuthProvider('microsoft.com');
        firebase.auth().signInWithPopup(provider).then(data => {
            console.log(data);
            setLoader(prevState => ({ ...prevState, microsoftLoading: false }));
        })
    }

    return (
        <div className={styles.root}>
            <Paper elevation={3} className={styles.container}>
                <Typography variant="h6">
                    Login 
                </Typography>
                {error.open && <Typography className={styles.errorText}>{error.message}</Typography>}
                <TextField 
                    name="email"
                    color="primary"
                    variant="outlined"
                    value={val.email}
                    type="email"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    placeholder="Enter Email"
                />
                <br />
                <br />
                <TextField 
                    name="password"
                    color="primary"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={val.password}
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button 
                    variant="contained"
                    fullWidth
                    color="primary"
                    size="large"
                    onClick={() => handleLoginButton()}
                >
                    {loader.buttonLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login'}
                </Button>
                <br />
                <p>OR</p>
                <Divider />
                <br />
                <Button 
                    variant="outlined"
                    fullWidth
                    color="primary"
                    size="large"
                    startIcon={<FcGoogle />}
                    className={styles.googleButton}
                    onClick={() => handleGoogleLogin()}
                >
                    {loader.googleLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login with Google'}
                </Button>
                <br />
                <br />
                <Button
                    variant="outlined"
                    startIcon={<AiOutlineGithub />}
                    color="default"
                    fullWidth
                    size="large"
                    className={styles.githubButton}
                    onClick={() => handleGithubLogin()}
                >
                    {loader.githubLoading ? <CircularProgress style={{ color: '#4078c0'}}  size={26} />: 'Login with Github'}
                </Button>
                <br />
                <br />
                <Button
                    variant="outlined"
                    startIcon={<AiOutlineTwitter style={{ color: '#1DA1F2'}} />}
                    color="default"
                    fullWidth
                    size="large"
                    className={styles.githubButton}
                    onClick={() => handleTwitterLogin()}
                >
                    {loader.twitterLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login with Twitter'}
                </Button>
                <br />
                <br />
                <Button
                    variant={ showPhone ? "contained":"outlined"}
                    color="primary"
                    fullWidth
                    startIcon={<AiFillPhone />}
                    size="large"
                    className={styles.githubButton}
                    onClick={() => setShowPhone(!showPhone)}
                >
                    Login with Phone 
                </Button>
                <br />
                <br />
                {showPhone && <PhoneNumber />}
                <Button
                    variant="outlined"
                    startIcon={<FaFacebookF style={{ color: '#4267B2'}} />}
                    color="default"
                    fullWidth
                    size="large"
                    className={styles.githubButton}
                    onClick={() => handleFacebookLogin()}
                >
                    {loader.facebookLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login with Facebook'}
                </Button>
                <br />
                <br />
                <Button
                    variant="outlined"
                    startIcon={<TiVendorMicrosoft style={{ color: '#F25022'}} />}
                    color="default"
                    fullWidth
                    size="large"
                    className={styles.githubButton}
                    onClick={() => handleMicrosoftLogin()}
                >
                    {loader.microsoftLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login with Microsoft'}
                </Button>
            </Paper>
        </div>
    )
};


export default Login;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '90vh',
        margin: 'auto',
        display: 'flex',
    },
    container: {
        width: '20%',
        margin: 'auto',
        padding: theme.spacing(4),
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    googleButton: {
        textTransform: 'none',
        color: 'black',
        border: '1px solid #2d2d2d',
        "&:hover": {
            backgroundColor: '#EEEEEE'
        }
    },
    githubButton: {
        textTransform: 'none',
        color: 'black',
        border: '1px solid #2d2d2d',
        "&:hover": {
            backgroundColor: '#EEEEEE'
        }
    }
}))
