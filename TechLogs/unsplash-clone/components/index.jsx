import React, { useState } from 'react';
import app from '../utils/firebase';

const UnsplashAdmin = () => {
    const [ loader, setLoader ] = useState(false);
    const [ values, setValues ] = useState({
        title: "",
        date: "",
        imageData: "",
        imageName: "",
        imageFile: ""
    });

    async function handleSubmit(e){
        e.preventDefault();
        setLoader(true);
        const dbRef = app.database().ref("unplash-clone");
        let storageRef = app.storage().ref("unsplash-clone").child(values.imageName);
        const imagePutUpdate = await storageRef.put(values.imageFile);
        if(imagePutUpdate){
            const uploadedImageUrl = await app.storage().ref( "unsplash-clone" ).child(values.imageName).getDownloadURL();
            dbRef.push({
                title: values.title,
                imageName: values.imageName,
                imageUrl: uploadedImageUrl,
                date: values.date
            })
            setValues({ title: "", date: "", imageData: "", imageFile: "", imageName: ""});
            setLoader(false)
        }
    }
    function handleImageUpload(e){
       const reader = new FileReader();
       const fileName = e.target.files[0].name;
        const file = e.target.files[0];

        reader.onload = () => {
            setValues(prevState => ({...prevState, imageName: fileName, imageData: reader.result, imageFile: file }));
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    function handleChange(e){
        const name = e.target.name;
        const val = e.target.value;

        setValues(prevState => ({ ...prevState, [name]: val }));

    }
    return (
        <div className="py-20 mx-auto w-6/12">
            <p className="text-3xl">Admin Interface</p>
            <div className="p-10 my-10 border border-gray-300 shadow-md">
                <label>Add Data</label>
                <input 
                    placeholder="Add title"
                    name="title"
                    onChange={handleChange}
                    className="w-full my-2 border border-gray-300 rounded-md p-2"
                />
                <input 
                    placeholder="Enter Date"
                    type="date"
                    name="date"
                    onChange={handleChange}
                    className="w-full my-2 border border-gray-300 rounded-md p-2"
                />
                <br />
                {values.imageData ? <div><img src={values.imageData} /></div>:
                    <input  
                        type="file"
                        onChange={handleImageUpload}
                        className="w-full my-2"
                    />
                }
                <br />
                <button
                    className="outline-none focus:outline-none p-2 bg-black text-white w-full"
                    onClick={handleSubmit}
                >
                    {loader ? "Uploading....":"Submit"}
                </button>
            </div>
        </div>  
    );
};
export default UnsplashAdmin;
