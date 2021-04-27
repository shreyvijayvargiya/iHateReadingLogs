import React, { useState, useEffect } from 'react';
import { TextField, Button, Radio, FormControl, FormLabel, FormControlLabel, RadioGroup, Divider } from '@material-ui/core';
import app from '../../utils/firebase';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';

const Landing = () => {

    const [value, setValue] = useState('organiser');
    const router = useRouter();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [username, setUsername] = useState(null);
    const [gameName, setGameName] = useState(null);

    const handleGameNameChange = (e) => {
        const val = e.target.value;
        setGameName(val)
    };

    const handelSubmit = () => {
        if(!gameName || !username){
            alert("Please fill the name and username");
            return
        }
        if(value === 'organiser'){
            const dbRef = app.database().ref("games");
            const db = {
                organiserName: username,
                organiserId: uuidv4(),
                players: {},
                winners: {},
                prizes: {},
                gameName: gameName
            }
            dbRef.push(db);
            router.push(`/organiser?game=${gameName}`);
        }
        if(value === 'player'){
            const dbRef = app.database().ref("games");
            let isGameExist;
            dbRef.on('value', snap => {
                const games = snap.val();
                isGameExist = Object.keys(games).filter(item => { 
                    if(games[item].gameName === gameName){
                        return item
                }});
            });
            if(isGameExist && isGameExist.length > 0){
                const id = isGameExist[0];
                const db = app.database().ref(`games`).child(id).child("players");
                db.push({
                    playerName: username
                });
                router.push(`/player?game=${gameName}&username=${username}`)
            }else {
                alert('No such game is on')
            }
        }
    }

    return (
        <div className="flex flex-col justify-center align-middle text-center w-screen h-screen">
            <h1 className="text-4xl">Witness Tombola</h1>
            <div className="shadow-xl w-auto m-auto p-8 bg-gray-100">
                <p className="text-2xl">Please fill the form to start the game</p>
                <br />
                <h4>Select your type</h4>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel  value="organiser" control={<Radio />} label="Organiser" />
                        <FormControlLabel value="player" control={<Radio />} label="Player" />
                    </RadioGroup>
                </FormControl>
                <br />
                <Divider />
                <br />
                <div>
                    <TextField 
                        color="primary"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={username}
                        placeholder="Enter your name"
                        onChange={(e) => {
                            const val = e.target.value;
                            setUsername(val)
                        }}
                    />
                    <br />
                    <br />
                    <TextField 
                        color="primary"
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder={value === 'organiser' ? "Set the game name": "Enter the game name"}
                        onChange={handleGameNameChange}
                    />
                    <br />
                    <br />
                    <Button
                        fullWidth
                        color="primary"
                        value={gameName}
                        size="medium"
                        variant="contained"
                        onClick={handelSubmit}
                    >
                        Start Game
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default Landing;
