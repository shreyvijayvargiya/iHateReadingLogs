import React from 'react';

const Project = ({ bg }) => {
    return (
        <div className="p-4">
            <p className={`text-${bg}-600`}>
                Hello, I am Project component
            </p>
        </div>
    );
};
export default Project;
