import React from 'react';
import { Button, Divider, Grid, TextField } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2'
import firebase from 'firebase';

const PhoneNumber = () => {

    const [phone, setPhone] = React.useState('');
    const [code, setCode] = React.useState('');

    const handleConfirmCode = () => {
        if(!code){
            alert('Please add the code')
        }else {
            window.confirmationResult.confirm(code).then(result => console.log(result.user, 'result'))
        }
    }

    const handleSendOtp = () => {
        if(!phone){
            alert('Enter the number please')
        }else {
            const appVerifier = window.recaptchaVerifier;
            const phoneValue = '+' + phone;
            firebase.auth().signInWithPhoneNumber(phoneValue, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
            }).catch(error => console.log(error));
        }
    };
    React.useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              console.log(response, 'response')
            }
        });
    }, [])
   

    return (
        <div>
            <Divider />
            <br />
            <PhoneInput
                country={'in'}
                value={phone}
                inputStyle={{ width: '98%'}}
                onChange={(val) => setPhone(val)}
            />
            <br />
            <TextField 
                variant="outlined"
                color="primary"
                value={code}
                onChange={(e) => {
                    const val = e.target.value;
                    setCode(val)
                }}
                size="small"
                placeholder="Enter verification code"
            />
            <br />
            <br />
            <Grid container justify="space-between">
                <Grid item>
                    <Button 
                        variant="outlined"
                        color="default"
                        id="sign-in-button"
                        size="small"
                        onClick={() => handleSendOtp()}
                    >
                        Send Code
                    </Button>
                </Grid>
                <Grid item >
                    <Button 
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleConfirmCode()}
                    >
                        Confirm Code
                    </Button>
                </Grid>
            </Grid>
            <br />
        </div>
    );
};
export default PhoneNumber;
