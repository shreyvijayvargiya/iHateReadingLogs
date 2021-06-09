import React, { useEffect, useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { shuffle } from 'lodash';
import { PlayersModule, PrizeModule, WinnersModule, RecentActivity } from '../../modules';


const Organiser = () => {
    
    const [loader, setLoader ] = useState(false);
    const [timer, setTimer] = useState(false);
    
    const ticketArray = new Array(9);
    const createArray = ()=>{
        for(let i=0; i<9; i++){
            ticketArray[i]=new Array(10)
        };
        for(let i=0; i< ticketArray.length;i++){
            fillNumber(i)
        }
    };
    function fillNumber(index){
        for(let j=index*10 + 1; j<=(index+1)*10; j++){
            ticketArray[index][j]=j
        };
    };
    const [ allArray, setAllArray ] = useState(new Array(90));
    const [ calledNum, setCalledNum ] = useState("");
    const [ remainingNums, setRemainingNums ] = useState(allArray);

    function fillArray(){
        setLoader(true)
        for(let i=0; i<90; i++){
            allArray[i]=i+1; 
            setAllArray(allArray);
        };
        setLoader(false)
    }
    
    useEffect(() => {
        createArray()
        fillArray()
    }, []);
    
    function announceNumber(){
        setTimer(true)
        let i = 3;
        const remain = [ ...remainingNums ];
        const shuffledArray = shuffle(remain);
        const remainArr = remain.filter(item => {
            if(item !== shuffledArray[0]){
                return item
            }
        });
        setTimeout(() => {
            setTimer(false)
            setRemainingNums(remainArr);
            setCalledNum(shuffledArray[0]);
        }, 3000);
    };
   
    return (
        <Grid container justify="space-between" className="h-screen">
            <Grid item md={3}>
                <PlayersModule />
                <RecentActivity />
            </Grid>
            <Grid item md={6} justify="space-around" className="p-4 text-center">
                <p>Welcome Organiser</p>
                <div className="p-4 text-white text-3xl w-2/12 mt-3 mb-3 rounded-full m-auto bg-black ">
                    {!timer && calledNum ? calledNum : <p className="text-sm text-white">Next number....</p>}
                </div>
                <Button 
                    onClick={announceNumber}
                    variant="outlined"
                    color="primary"
                    size="small"
                    disabled={timer ? true: false}
                    style={{ textTransform: 'none'}}
                >
                    New Num
                </Button>
                <br />
                <br />
                {allArray.length>0 && <div className="flex w-11/12 justify-around items-start border border-gray-300 shadow-md rounded-md p-4 m-auto">
                    <div className="flex flex-col">
                        {allArray.slice(0, 10).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(10, 20).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(20, 30).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(30, 40).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(40, 50).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(50, 60).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(60, 70).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(70, 80).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(80, 90).map(item => (
                            <span className={`border border-gray-200 p-3 text-xs  m-1 rounded-md ${!remainingNums.includes(item) && 'bg-yellow-500'}`}>{item}</span>
                        ))}
                    </div>
                </div>}
            </Grid>
            <Grid item md={3}>
                <PrizeModule />
                <WinnersModule />
            </Grid>
        </Grid>
    )
};
export default Organiser;
