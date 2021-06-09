import React, { useEffect, useState } from 'react';
import { addSamplesInTracks } from '../../../Redux/action/addTracks';
import DropCart from './DropCart';

const Body = () => {

    const initialTrack = [
        {
            id: 1,
            name: 'silence',
        },
        {
            id: 2,
            name: 'silence',
        },
        {
            id: 3,
            name: 'silence',
        },
        {
            id: 4,
            name: 'silence',
        },
        {
            id: 5,
            name: 'silence',
        },
    ]

    const [ trackName, setTrackName ] = useState("");
    const [ items, setItems ] = useState(initialTrack);
    const [ active, setActive ] = useState(0)

    function handleTrackName(e){
        const val = e.target.value;
        setTrackName(val);
    };
    
    function save(){
        if(!trackName){
            alert('Please add the Track name')
        }
        dispatch(addSamplesInTracks(items));
       
    };
  
    return (
        <div className="h-full w-9/12 bg-gray-200 p-4">
            <p>Body</p>
            <div className="rounded-md border border-gray-300 flex md:flex-row justify-between items-center sm:flex-col xs:flex-col xxs:flex-col">
                <div className="rounded-l-md border-r-1 border-gray-200 h-40 bg-white md:w-2/12 p-4 sm:w-full xs:w-full xxs:w-full">
                    <input 
                        className="text-sm cursor-pointer rounded-sm sm:w-full xs:w-full xxs:w-full p-1" 
                        value={trackName} 
                        placeholder="Track Name" 
                        onChange={(e) => handleTrackName(e)} 
                    />
                    <button
                        className="rounded-md p-1 mt-1 text-sm border text-green-500 border-green-600 focus:ring-1"
                        onClick={save}
                        data-testid="addTracks"
                    >
                        Save
                    </button>
                </div>
                <div className="md:w-10/12 sm:w-full xxs:w-full xs:w-full h-40 flex justify-between">
                    {items.map(element => (
                        <DropCart 
                            key={element.id} 
                            id={element.id}
                            duration={element.duration} 
                            setTracks={setItems} 
                            tracks={items} 
                            save={save}
                            item={element} 
                            active={active}
                            setActive={setActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Body;
