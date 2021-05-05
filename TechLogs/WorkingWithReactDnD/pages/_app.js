
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <DndProvider backend={HTML5Backend}>
            <Component {...pageProps} />
        </DndProvider>
    );
};


export default MyApp;
