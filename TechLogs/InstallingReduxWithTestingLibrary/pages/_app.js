
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'tailwindcss/tailwind.css';
import { store, persistor } from '../Redux/store';

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <DndProvider backend={HTML5Backend}>
                    <Component {...pageProps} />
                </DndProvider>
            </PersistGate>
        </Provider>
    );
};


export default MyApp;
