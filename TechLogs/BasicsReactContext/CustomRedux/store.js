import React from 'react';
export const theme = {
    light: {
        background: '#EEEEE',
        foreground: '#2D2D2D'
    },
    dark: {
        background: '#2D2D2D',
        foreground: '#EEEEEE'
    },
    userLoggedIn: true
};
export const ThemeContext = React.createContext(theme);