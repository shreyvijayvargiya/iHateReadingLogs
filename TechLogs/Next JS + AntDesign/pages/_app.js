import React from 'react';
import '../utils/antDesignStyles.less';

export default function MyApp({ Component, pageProps }){
    return (
        <Component {...pageProps} />
    );
};
