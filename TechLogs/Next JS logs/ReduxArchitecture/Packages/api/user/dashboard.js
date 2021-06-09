import axios from 'axios';

export const fetchUsersApi = async () => {
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
    return response;
}