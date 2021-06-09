import React from 'react';
import { TextField, Button, makeStyles, Paper, Typography, CircularProgress } from '@material-ui/core';
import app from '../utils/firebase';

const SignUp = () =>{
    const [val, setVal] = React.useState({
        email: '',
        password: '',
    });
    const [loader, setLoader] = React.useState({
        googleLoading: false,
        buttonLoading:  false
    });
    const [error, setError] = React.useState({
        message: 'Error',
        open: false
    })
    const styles= useStyles();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setVal((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSignupButton = () => {
        if(!val.email || !val.password){
            setError({message:'Email and Password are required', open: true })
        }else{
            setError({message:'', open: false });
            setLoader({ googleLoading: false, buttonLoading: true });
            const authRef = app.auth().createUserWithEmailAndPassword(val.email, val.password);
            authRef.then(user=> {
                console.log(user);
                setLoader({ googleLoading: false, buttonLoading: false});
            }).catch((error) => {
                setLoader({ googleLoading: false, buttonLoading: false });
                setError({ message: error.message, open: true });
                console.log(error, 'error')
            });
        }
    };

    return (
        <div className={styles.root}>
            <Paper elevation={3} className={styles.container}>
                <Typography variant="h6">
                    Sign up 
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
                    placeholder="Create password"
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button 
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick={() => handleSignupButton()}
                    size="large"
                >
                    {loader.buttonLoading ? <CircularProgress style={{ color: 'black'}}  size={26} />: 'Login'}
                </Button>
            </Paper>
        </div>
    )
};


export default SignUp;

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
    }
}))
