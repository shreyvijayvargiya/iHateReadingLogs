import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes';

const DropCart = ({ id, setTracks, item, tracks, active, setActive }) => {


    const [ hovered, sethovered ] = useState(false);
     
    const [ { isOver, endDrag }, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop(item, monitor){
            const dropped = monitor.didDrop;
            if(dropped){
                sethovered(false);
                const newTracks = tracks.map(singleTrack => {
                    if(singleTrack.id === id){
                        singleTrack.name = item.name;
                    }
                    return singleTrack
                })
                setTracks(newTracks)
            }
         },
        hover: (item, monitor) => {
            sethovered(true);
            setActive(id)
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            endDrag: monitor.getDropResult(),
        }),
    }));
     
    function deleteTrack(){
        const updatedTracks = tracks.map(item => {
            if(item.id === id){
                item.name = 'silence',
                item.id = id;
            }
            return item
        });
        setTracks(updatedTracks);
    };

    return (
        <div className={`border-l border-r border-gray-300 w-3/12 ${hovered && active === id && `bg-red-300`}`}
            ref={drop}
        >
            {item && item.name !== 'silence' && (
                <div key={item.id} className={`relative bg-yellow-300 p-4 h-40  cursor-pointer`}>
                    <div className="absolute top-0 right-0 m-2" onClick={deleteTrack}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>    
                    </div>
                    <p>{item.name}</p>
                </div>
            )}
        </div>
    );
};
export default DropCart;
