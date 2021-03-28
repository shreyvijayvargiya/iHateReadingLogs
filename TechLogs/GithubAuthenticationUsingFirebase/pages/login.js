import React from 'react';
import { TextField, Button, makeStyles, Paper, Typography, CircularProgress } from '@material-ui/core';
import app from '../utils/firebase';
import { FcGoogle } from 'react-icons/fc';
import firebase from 'firebase';
import { AiOutlineGithub } from 'react-icons/ai';


const Login = () =>{
    const [val, setVal] = React.useState({
        email: '',
        password: '',
    });
    const [loader, setLoader] = React.useState({
        googleLoading: false,
        buttonLoading: false,
        githubLoading: false
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
                    {loader.googleLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login With Google'}
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
                    {loader.githubLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login with Github'}
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
            border: '2px solid #2d2d2d',
            backgroundColor: '#EEEEEE'
        }
    },
    githubButton: {
        textTransform: 'none',
        color: 'black',
        "&:hover": {
            backgroundColor: '#EEEEEE'
        }
    }
}))
