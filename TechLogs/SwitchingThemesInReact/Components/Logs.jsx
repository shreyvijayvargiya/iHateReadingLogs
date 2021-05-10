import React from 'react';

const Logs = ({ bg }) => {
    return (
        <div className="p-4">
            <p className={`text-${bg}-600`}>
                Hello, I am log component
            </p>
        </div>
    );
};
export default Logs;
