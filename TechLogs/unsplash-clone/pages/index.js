import React, { useState, useEffect } from 'react';
import app from '../utils/firebase';

const App = () => {
    const [loader, setLoader] = useState(false);
    const [ images, setImages ] = useState(null);

    useEffect(() => {
        setLoader(true)
        const dbRef = app.database().ref("unplash-clone");
        dbRef.on("value", snap => {
            setImages(snap.val());
            setLoader(false)
        });
    }, [ images ])
    return (
        <div className="w-full text-center p-10">
            <p className="text-3xl">Welcome to Unsplash Clone</p>
                {loader ? <p>Loading....</p>
                    :
                    <div className="flex flex-wrap py-10 justify-start items-center">
                        {images && Object.keys(images).map(item => {
                            return (
                                <div className="w-4/12 h-100 object-cover object-center p-4">
                                    <img className="border broder-gray-200" src={images[item].imageUrl} />
                                    <div className="flex flex-wrap justify-between items-center">
                                        <p className="text-left text-xl">{images[item].title}</p>
                                        <p className="text-xs">{images[item].date}</p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                }
            <hr />
            <footer>
                <p>Develop by <a className="underline text-green-600" href="https://www.ihatereading.in">iHateReading</a></p>
            </footer>
        </div>
    )
};
export default App;
