import React, { useEffect, useState } from 'react';
import app from '../../utils/firebase';

const Navbar = () => {

    const [ activeTab, setActivetab ] = useState("logs");
    const [ bg, setBg ] = useState("");
    const [ themes, setThemes ] = useState(null);
    
    const fetchThemes = () => {
        const dbRef = app.database().ref("themes");
        dbRef.on("value", snap => { 
            setThemes(snap.val());
            setBg(snap.val()[activeTab])
        });
    };

    useEffect(() => {
        fetchThemes();
    }, []);
    
    const tabs = [
        {
            id: 1,
            name: 'logs'
        },
        {
            id: 2,
            name: 'about'
        },  
        {
            id: 3,
            name: 'checkout'
        },
        {
            id: 4,
            name: 'project'
        },

    ];
    
    function handleTabChange(tab){
        setActivetab(tab);
        setBg(themes[tab])
    };

    return (
        <div className={`w-full h-full bg-${bg}-400`}>
            <p className="text-center p-4">{activeTab} Component</p>
            <div className="flex justify-around items-center">
                {tabs.map(item => (
                    <div className="p-4" key={item.id}>
                        <button
                            className={`rounded-sm p-2 `}
                            onClick={() => handleTabChange(item.name)}
                        >
                            {item.name}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Navbar;