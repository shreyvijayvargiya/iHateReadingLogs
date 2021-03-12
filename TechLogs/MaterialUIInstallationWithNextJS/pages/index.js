import React from 'react';
import { Button, TextField } from '@material-ui/core';


const App = () => {
    return (
        <div>
            <h1>Hello, Welcome to Material UI Installlation with  Next JS</h1>
            <Button variant="contained" color="primary">Hello</Button>
            <br />
            <br />
            <TextField  
                name="name"
                placeholder="Enter the name"
                variant="outlined"
                color="secondary"
            />
        </div>
    )
};
export default App;
