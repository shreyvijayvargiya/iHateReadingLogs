import React from 'react';

const App = () => {

    return (
        <div className="w-full text-center p-10">
            <p className="text-3xl">Welcome to Next JS + Firebase +  Tailwind CSS repository</p>
            <img src="/demo.png" className="m-auto my-10 shadow-xl" />
            <p>Developed by:
                <a href="www.ihatereading.in/squad" className="text-indigo-600 underline ml-2">
                    Shrey Vijayvargiya
                </a>
            </p>
            <br />
            <p>For more repositories like this refer: 
                <a href="www.ihatereading.in/repos" className="text-indigo-600 underline ml-4">
                    ihateReading Repos
                </a>
            </p>
        </div>
    )
};
export default App;
