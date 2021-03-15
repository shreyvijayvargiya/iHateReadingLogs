import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersApi } from '../Packages/api/user/dashboard';
import { addUsersInStore } from '../Redux/action/addUsers';


const App = () => {

    const [users, setUsers] = React.useState([]);
    const [loader, setLoader] = React.useState(true);
    const dispatch = useDispatch();

    // fetching users from redux store
    const data = useSelector(state => state);

    const fetchUsers = async () => {
        setLoader(true)
        const usersData = await fetchUsersApi();
        // instead of updating data into state we will put this data in reducer via action
        // call you action here and add the usersData into the reducer state
        // once this is done put the loader off or 
        dispatch(addUsersInStore(usersData.data));
        setLoader(false);
    };
    
    const fetchUserFromStoreAndUpdateInState = () => {
        setUsers(data.users)
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
