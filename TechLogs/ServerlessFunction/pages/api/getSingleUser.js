import axios from 'axios';

module.exports = async(req, res) => {
    const { id } = req.query;
    const listofUsers = (await axios.get('https://jsonplaceholder.typicode.com/users')).data;
    const singleUser = listofUsers.filter(item => {
        if(item.id == id) return item
    });
    return res.json(singleUser[0])
}