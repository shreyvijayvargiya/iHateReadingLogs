import React from 'react';
import { Button, TextField, Typography, makeStyles, Paper, InputAdornment, IconButton, CircularProgress } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { validateYupSchema } from 'formik';

const App = () => {

    const [values, setValues] = React.useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = React.useState({
        emailError: '',
        passwordError: '',
        usernameError: ''
    });
    const [loader, setLoader] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const styles = useStyles();
    const [disabled, setDisabled] = React.useState(true);

    const validateEmail = () => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(values.email)){
            setError(prevState => ({ ...prevState, emailError: 'Email is invalid'}))
        }else {
            setError(prevState => ({ ...prevState, emailError: false }));
        }
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        if(!values.email || !values.password || !values.username){
            setDisabled(true);
        }else if(error.emailError || error.passwordError || error.usernameError){
            setDisabled(true);
        }
        if(name === 'email') {
            validateEmail();
        };
        setDisabled(false);
        setValues(prevState => ({ ...prevState, [name]: val }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
        if(!values.username){
            setError(prevState => ({ ...prevState, usernameError: 'Username is required'}));
            setLoader(false)
        }
        if(!values.email){
            setError(prevState => ({ ...prevState, emailError: 'Email is required'}));
            setLoader(false)
        }if(!values.password){
            setError(prevState => ({ ...prevState, passwordError: 'Password is required'}));
            setLoader(false)
        }
        else {
            alert(JSON.stringify({
                username: values.username + '/n',
                email: values.email + '/n',
                password: values.password,
            }));
            setLoader(false);
        }
    };

    return (
        <div>
            <br />
            <br />
            <Paper elevation={4} className={styles.form}>
                <h1>Custom Forms in React</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Typography variant="caption">Username</Typography>
                    <br />
                    <TextField 
                        variant="outlined"
                        color="primary"
                        name="username"
                        id="username"
                        error={error.usernameError}
                        fullWidth
                        size="small"
                        value={values.username}
                        placeholder="Enter Username"
                        onChange={(e) => handleChange(e)}
                    />
                    {error.usernameError && <Typography variant="caption">{error.usernameError}</Typography>}
                    <br />
                    <br />
                    <Typography variant="caption">Email</Typography>
                    <br />
                    <TextField 
                        variant="outlined"
                        color="primary"
                        name="email"
                        id="email"
                        size="small"
                        onBlur={() => validateEmail()}
                        error={error.emailError}
                        fullWidth
                        value={values.email}
                        placeholder="Enter Email"
                        onChange={(e) => handleChange(e)}
                    />
                    {error.emailError && <Typography variant="caption">{error.emailError}</Typography>}
                    <br />
                    <br />
                    <Typography variant="caption">Password</Typography>
                    <br />
                    <TextField 
                        variant="outlined"
                        color="primary"
                        name="password"
                        id="password"
                        type={showPassword ? 'text': 'password'}
                        size="small"
                        error={error.passwordError}
                        fullWidth
                        value={values.password}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility  style={{ color: '#272727', fontSize: 20 }} /> : <VisibilityOff  style={{ color: '#272727', fontSize: 20 }} />}
                                </IconButton>
                                </InputAdornment>
                            )
                        }}
                        placeholder="Enter Password"
                        onChange={(e) => handleChange(e)}
                    />
                    {error.passwordError && <Typography variant="caption">{error.passwordError}</Typography>}
                    <br />
                    <br />
                    <Button 
                        disabled={disabled} 
                        fullWidth 
                        size="large" 
                        className={styles.button} 
                        variant="contained" 
                        color="primary" 
                        onClick={(e) => handleSubmit(e)}
                    >
                        {loader ? <CircularProgress style={{ color: '#eeeeee' }} />: "Submit"}
                    </Button>
                </form>
            </Paper>
        </div>
    )
};
export default App;


const useStyles = makeStyles(theme => ({
    button: {
    },
    textField: {
        margin: theme.spacing(2)
    },
    form: {
        margin: theme.spacing(2),
        width: '98%',
        margin: 'auto',
        [theme.breakpoints.up('lg')]:{
            width: '20%',
            padding: theme.spacing(2),
            margin: 'auto'
        }
    },
    root: {
        textAlign: 'center'
    }
}))