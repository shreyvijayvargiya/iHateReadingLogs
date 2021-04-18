import React from 'react';
import lodash, { shuffle } from 'lodash';
import { fillTicketColumnWithSingleNumber , fillTicketsArray, fillRemainingNumber, fillZeroAtEmptyPlace } from './createTicket';

const Ticket = () => {

    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let columnsWithOneNumberOnly = []; 
    let remainingColumns= [];
   
   
    const ticketsArray = new Array(3);


    function getColumnsWithOneNumberOnly(){
        const shuffledArr = shuffle(arr);
        columnsWithOneNumberOnly.push(shuffledArr.slice(0, 3));
        remainingColumns.push(shuffledArr.slice(3)); 
    };

    getColumnsWithOneNumberOnly();
    fillTicketsArray(ticketsArray);
    fillTicketColumnWithSingleNumber(ticketsArray, columnsWithOneNumberOnly);
    fillRemainingNumber(ticketsArray, remainingColumns)
    // console.log(ticketsArray, 'rfrf')
    
    fillZeroAtEmptyPlace(ticketsArray)
    return (
        <div className="flex flex-col justify-center text-center align-middle">
            <h1 className="text-2xl text-black">Ticket</h1>
            <div className="flex justify-center align-middle m-auto shadow-lg mt-4 border border-gray-200 rounded-md">
                {ticketsArray.map((rows, index) => (
                    <div key={index} className="flex flex-col justify-items-center p-3">
                        {rows.map((columns, i) => {
                            return (
                                <button key={i} className="flex p-4 flex-col m-3 rounded-md border border-gray-300 shadow-md cursor-pointer focus:border focus:border-indigo-300">
                                    {columns}
                                </button>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
};
export default Ticket;
