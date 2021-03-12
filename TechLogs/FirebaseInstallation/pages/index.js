import React from 'react';
import app from '../utils/firebase';

const App = () => {

    const [users, setUsers] = React.useState(null);

    const fetchUsers = () => {
        const dbRef = app.database().ref();
        dbRef.on("value", snap => { 
            setUsers(snap.val().users)
        });
    }
    React.useEffect(() => {
        fetchUsers();
    }, []);
    
    return (
        <div>
            <h1>Hello, Welcome to Next JS architecture</h1>
            <ol>
                {users && Object.keys(users).map(item => {
                    console.log(item)
                    return (
                        <li key={item}>
                            {users[item].username}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
};
export default App;
