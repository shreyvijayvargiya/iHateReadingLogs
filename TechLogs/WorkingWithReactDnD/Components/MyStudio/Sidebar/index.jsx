import React, { useState } from 'react';
import { data } from './data';
import { AudioCard } from '../../../modules/index';

const Sidebar = () => {
    const [selected, setSelected] = useState();
 
    const handleSelected = (id) => {
        setSelected(id);
    };
    
    return (
        <div className="w-3/12 bg-gray-50 shadow-xl p-4 h-full">
            <p className="m-2 text-gray-700">Sidebar</p>
            {data.map(item => (
                <AudioCard 
                    key={item.id} 
                    id={item.id}  
                    name={item.name} 
                    src={item.src} 
                    duration={item.duration}
                    handleSelected={handleSelected} 
                    selected={selected} 
                />
            ))} 
        </div>
    );
};
export default Sidebar;
