import React, { useState } from 'react';
import app from '../utils/firebase';
import { Navbar } from '../modules';

const App = () => {

    const [ themes, setThemes ] = React.useState(null);
    const [ edit, setEdit] = useState(false);
    const [ value, setValue ] = useState({})

    const fetchThemes = () => {
        const dbRef = app.database().ref("themes");
        dbRef.on("value", snap => { 
            setThemes(snap.val())
        });
    }
    React.useEffect(() => {
        fetchThemes();
    }, []);

    function handleChange(e){
        const val = e.target.value;
        const name = e.target.name;
        setThemes(prevState => ({ 
            ...prevState, [name]: val
        }));
    };
    
    function handleSave(){
        const dbRef = app.database().ref("themes");
        dbRef.set(themes);
    };



    return (
        <div className="h-screen m-auto flex flex-col justify-start w-full items-center">
            <p className="text-4xl p-4">Theme Management System</p>
            <a 
                className="rounded-md bg-green-500 hover:bg-green-600 focus:underline focus:outline-none focus:border-none outline-none p-2"
                href="https://shreyvijayvargiya26.medium.com/developing-theme-management-system-c55e5bb996a0"
            >
                Read the instructions process
            </a>
            <br />
            <hr className="w-full " />
            <div className="w-full h-5/6 flex justify-between items-start">
                <div className="w-5/12 mx-auto">
                    <div className="border-gray-100 border w-full mx-auto p-4 m-4">
                        <div className="flex justify-between items-center border-gray-100 bg-gray-100">
                            <div className="p-4 font-semibold">
                                <p>Page </p>
                            </div>
                            <div className="p-4">
                                <p className="text-center font-semibold">Theme</p>
                            </div>
                        </div>
                        {themes && Object.keys(themes).map(item => (
                            <div className="flex justify-between items-center hover:bg-gray-100">
                                <div className="p-4 text-xl">
                                    <p>{(item[0]).toUpperCase()}{item.slice(1)}</p>
                                </div>
                                <div className="p-">
                                    <input 
                                        placeholder={themes[item]}
                                        name={item}
                                        onBlur={handleSave}
                                        onChange={handleChange}
                                        className="p-2 m-2 text-center border-indigo-300 rounded-md border hover:border-indigo-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-700 w-full h-full text-white">
                        themes
                        <pre>
                            <code className="text-white p-4">
                                {JSON.stringify(themes, undefined, 2)}
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="p-4 border m-4 border-gray-200 w-6/12 h-full">
                    <Navbar />
                </div>
            </div>
        </div>
    )
};
export default App;
