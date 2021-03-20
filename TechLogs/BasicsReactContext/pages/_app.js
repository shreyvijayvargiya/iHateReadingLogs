import React from 'react';
import { ThemeContext, theme } from '../CustomRedux/store';

function MyApp({ Component, pageProps }) {

    return (
        <ThemeContext.Provider value={theme}>
            <Component {...pageProps} />
        </ThemeContext.Provider>
    );
  };
  
export default MyApp;
