import React from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

const App = () => {
    return (
        <div>
            <h1>Hello, Welcome to styled-components installation</h1>
            <LoginContainer bgColor="#EEEEEE">
                <TextField  
                    name="name"
                    fullWidth
                    size="small"
                    placeholder="Enter the name"
                    variant="outlined"
                    color="secondary"
                />
                <br />
                <br />
                <CustomButton variant="contained" color="primary" size="large">Hello</CustomButton>
            </LoginContainer>
        </div>
    )
};
export default App;

const LoginContainer = styled.div`
    width: 50%;
    margin: auto;
    padding: 10px;
    text-align: center;
    border: 1px solid #EEEEEE;
    border-radius: 6px;
    background-color: ${props => props.bgColor };
`;

const CustomButton = styled(Button)`
    width: 80%;
`;


