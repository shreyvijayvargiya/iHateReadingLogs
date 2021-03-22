import React from 'react';

const MyApp = ({ Component, pageProps })=> {

    return (
        <div>
            
            <Component {...pageProps} /> 
        </div>
    );
};
export default MyApp;
