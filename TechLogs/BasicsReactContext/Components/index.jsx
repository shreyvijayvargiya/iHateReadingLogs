import React, { useContext } from 'react';
import { ThemeContext } from '../CustomRedux/store';
import { Button } from '@material-ui/core';
import Profile from './Profile';
import { toggleUserLoggedInState } from '../CustomRedux/action';

const Home = () => {
    
    const theme = useContext(ThemeContext);
    const [loggedIn, setLoggedIn] = React.useState(theme.userLoggedIn);

    const handleClick = () => {
        setLoggedIn(!loggedIn);
        toggleUserLoggedInState(!loggedIn)
    };

    return (
        <div>
           <Button 
            variant="contained" 
            color="primary"
            onClick={() => handleClick()}
           >
               {loggedIn ? 'Logout': 'Login'}
           </Button>
           <Profile />
        </div>
    );
};
export default Home;
