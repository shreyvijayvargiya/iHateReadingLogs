import React from 'react';
import { TextField, Button, makeStyles, Paper, Typography, CircularProgress } from '@material-ui/core';
import app from '../utils/firebase';
import { FcGoogle } from 'react-icons/fc';
import firebase from 'firebase';
import { setCookie } from '../utils/cookie';
import Cookies from 'next-cookies';
import { Router, useRouter } from 'next/router';


const Login = () =>{
    
    const router = useRouter();

    const [val, setVal] = React.useState({
        email: '',
        password: '',
    });
    const [loader, setLoader] = React.useState({
        googleLoading: false,
        buttonLoading:  false
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
                setCookie('authToken', res.user.uid);
                setCookie('userEmail', res.user.email);
                setLoader({ googleLoading: false, buttonLoading: false });
                router.push('/dashboard');
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
            setCookie('authToken', res.user.uid);
            setCookie('userEmail', res.user.email);
            setLoader({ googleLoading: false, buttonLoading: false });
            router.push('/dashboard');
          }).catch(error => {
            setLoader({ googleLoading: false, buttonLoading: false });
            console.log(error, 'errror')
        });
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
    }
}));

export async function getServerSideProps({ req, res}){
    const token = Cookies({req, res});
    if(token.authToken !== undefined){
        res.statusCode = 302
        res.setHeader('Location', `/dashboard`) 
        return { props: { }};
    }else {
        return { props: { } }
    }
  }
