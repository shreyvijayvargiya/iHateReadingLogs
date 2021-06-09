import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import { Navbar } from '../../modules/index';

const MyStudio = () => {

    return (
        <div className="h-screen w-full bg-gray-200 overflow-hidden">
            <Navbar />
            <div className="w-full h-screen flex justify-between align-middle">
                <Sidebar />
                <Body />
            </div>
        </div>
    );
};
export default MyStudio;

