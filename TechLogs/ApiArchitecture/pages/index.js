import React from 'react';
import { fetchUsersApi } from '../Packages/api/user/dashboard';


const App = () => {

    const [users, setUsers] = React.useState([]);
    const [loader, setLoader] = React.useState(true);
    
    const fetchUsers = async () => {
        setLoader(true)
        const usersData = await fetchUsersApi();
        // setUsers(data.data);
        // instead of updating data into state we will put this data in reducer via action
        // call you action here and add the usersData into the reducer state
        // once this is done put the loader off or 
        setLoader(false);
    };
    
    // fetching state of reducer state 
    // const data = useSelector(state => state);
    

    const fetchUserFromStoreAndUpdateInState = () => {
        // updaing data of reducer state to components useState
        setUsers(data)
    };

    
    React.useEffect(() => {
        fetchUsers();
        fetchUserFromStoreAndUpdateInState();
    }, []);

    return (
        <div>
            <h1>Hello, Welcome to API architecture in frontend, article</h1>
            <br />
            <h3>Users List</h3>
            {!loader && users.length > 0 ? (
                <ol>
                    {users.map(item => {
                        return <li key={item.id}>{item.name}</li>;
                    })}
                </ol>
            ):
            <p>Loading the users list....</p>
        }
        </div>
    )
};
export default App;
