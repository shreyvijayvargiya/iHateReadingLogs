import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

    const [singleUser, setSingleUser] = useState(null);
    const [id, setId] = useState();

    const fetchSingleUser = () => {
        axios.post(`/api/getSingleUser?id=${id}`).then((res) => setSingleUser(res.data))
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchSingleUser()
    };
    return (
        <div>
            <h1>Hello, Welcome to Next JS Serverless Function Demo</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="userId">Enter user id</label>
                <br />
                <input type="number" value={id} placeholder="Enter id" onChange={(e) => { 
                    const id = e.target.value;
                    setId(id)
                }} />
            </form>
            <br />
            {singleUser && (
                <table style={{ border: '1px solid #eeeeee'}}>
                    <tbody >
                        <tr>
                            <td style={{ border: '1px solid #272727'}}>Name</td>
                            <td style={{ border: '1px solid #272727'}}>
                                <p>{singleUser.name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #272727'}}>Username</td>
                            <td style={{ border: '1px solid #272727'}}>{singleUser.username}</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #272727'}}>Email</td>
                            <td style={{ border: '1px solid #272727'}}>{singleUser.email}</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #272727'}}>Phone</td>
                            <td style={{ border: '1px solid #272727'}}>{singleUser.phone}</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #272727'}}>Website</td>
                            <td style={{ border: '1px solid #272727'}}>{singleUser.website}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    )
};
export default App;
