import axios from 'axios';

const getAllPostUrl = "https://jsonplaceholder.typicode.com/posts";

export default async function getAllPost(){
    const response = await axios.get(getAllPostUrl);
    return response.data;
} 