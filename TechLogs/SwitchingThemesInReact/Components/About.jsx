import React from 'react';

const About = ({ bg }) => {
    return (
        <div className="p-4">
            <p className={`text-${bg}-600`}>
                Hello, I am About component
            </p>
        </div>
    );
};
export default About;
