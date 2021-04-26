import React, { useState } from 'react';
import { currencies } from './Common-Currency';
import { Select, MenuItem } from '@material-ui/core';

const CurrencySelect = ({ variant }) => {

    const [currency, setCurrency] = useState({
        firstCurrency: "Rs",
        secondCurrency: "Rs"
    });
    
    function selectCurrency(e){
        const name = e.target.name;
        const val = e.target.value;
        setCurrency(prevState => ({ ...prevState, [name]:val }));
    };
    return (
        <div className="p-2 shadow-xl border border-gray-200 rounded-md w-4/12 m-auto text-center">
            <p>Currency Select with {variant ? variant: "without variant"} Input</p>
            <Select
                value={currency.firstCurrency}
                onChange={selectCurrency}
                color="primary"
                name="firstCurrency"
                variant={variant && variant}
            >
                {Object.keys(currencies).map(item => {
                    return(
                        <MenuItem value={currencies[item].symbol}>{currencies[item].symbol}</MenuItem>
                    )
                })}
            </Select>
            <span className="text-md ml-3">Selected currency: <strong>{currency.firstCurrency}</strong></span>
            <hr className="mt-4" />
            <p className="text-md mt-3">Simple Select element styled using Tailwind CSS </p>
            <select
                value={currency.secondCurrency}
                onChange={selectCurrency}
                name="secondCurrency"
                className="border border-gray-300 rounded-md p-3 bg-gray-50 m-4"
            >
                {Object.keys(currencies).map(item => {
                    return(
                        <option value={currencies[item].symbol}>{currencies[item].symbol}</option>
                    )
                })}
            </select>
            <span className="text-md ml-3">Selected currency: <strong>{currency.secondCurrency}</strong></span>
        </div>  
    );
};
export default CurrencySelect;
