import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore  } from 'redux';
import { reducer } from '../Redux/reducer/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";

const MyApp = ({ Component, pageProps })=> {

    const persistConfig  = {
        storage, 
        key: "root"
    };

    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    const persistor = persistStore(store);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} /> 
            </PersistGate>
        </Provider>
    );
};
export default MyApp;
