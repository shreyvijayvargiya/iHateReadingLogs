import React, { useContext } from 'react';
import { ThemeContext } from '../CustomRedux/store';

const Profile = () => {
    const theme = useContext(ThemeContext);
    return (
        <div>
            {theme.userLoggedIn && <h1>Hello, Welcome to Basics of React Context API</h1>}
            <p>{theme.userLoggedIn ? 'User logged in': 'User logged out'}</p>
        </div>
    );
};
export default Profile;
