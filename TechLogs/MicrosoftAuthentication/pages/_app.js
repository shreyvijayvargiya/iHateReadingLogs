import React from 'react';
import 'react-phone-input-2/lib/style.css'

const MyApp = ({ Component, pageProps })=> {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};
export default MyApp;
