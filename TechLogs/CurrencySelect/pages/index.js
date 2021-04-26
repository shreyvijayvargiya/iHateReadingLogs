import React from 'react';
import { CurrencySelect } from '../modules';

const App = () => {
    return (
        <div className="p-4">
            <p className="text-3xl text-center m-4">Currency Select</p>
            <CurrencySelect variant="outlined" />
            <br />
            <CurrencySelect  />
        </div>
    )
};
export default App;
