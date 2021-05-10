import React from 'react';

const Checkout = ({ bg }) => {
    return (
        <div className="p-4">
            <p className={`text-${bg}-600`}>
                Hello, I am Checkout component
            </p>
        </div>
    );
};
export default Checkout;
