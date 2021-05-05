import React from 'react';

const Navbar = () => {
    return (
        <div className="w-full h-auto shadow-sm flex justify-start items-center bg-gray-900 p-5">
            <img className="h-8 w-auto mr-4" src="/logo.svg" />
            <p className="text-white">My Studio</p>
        </div>
    );
};
export default Navbar;
