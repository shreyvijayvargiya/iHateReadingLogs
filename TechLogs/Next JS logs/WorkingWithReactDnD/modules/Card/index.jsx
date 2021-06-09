import React from 'react';
import { ItemTypes } from './ItemTypes';
import { useDrag } from 'react-dnd'

const AudioCard = (props) => {

    const [collected, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: {
            id: props.id, 
            name: props.name,
        },
        id: props.id,
    }));
   
    
    return (
        <div ref={drag} key={props.id}>
            <div {...collected} className={`flex justify-start items-center rounded-md p-4 m-2 cursor-pointer hover:bg-yellow-200 bg-gray-100`}>
                <div className={`rounded-full p-1 mr-4 `}>
                    <div className="fill-yellow-400': 'fill-none text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
                <div className="flex w-10/12 items-center justify-between">
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    );
};
export default AudioCard;

