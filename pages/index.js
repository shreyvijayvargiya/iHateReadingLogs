import React from 'react';
import Home from '../Components';

const App = () => {
    return (
        <div>
            <style jsx global>{`
                body {
                    margin: 0px !important;
                    padding: 0px !important;
                }
                `}
            </style>
            <Home />
        </div>
    )
};
export default App;

