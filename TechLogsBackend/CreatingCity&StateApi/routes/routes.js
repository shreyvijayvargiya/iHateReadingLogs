const axios = require('axios');
const express = require('express');


const router = express.Router();

function fetchCities(){
    const response = axios.get('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json');
    return response;
};

router.get('/cities', async(req, res) => {
    const response = await fetchCities();
    res.send(response.data);
});

router.get('/searchCity', async(req, res) =>{
    const params = req.query.city;
    const response = await fetchCities();
    const filteredCities = response.data.filter(item => {
        if(item.name.toUpperCase() === params.toUpperCase()){
            return item
        }
    });
    res.send({
        data: filteredCities,
        success: true
    })
});

router.get('/searchState', async(req, res) => {
    const params = req.query.state;
    const response = await fetchCities();
    const filteredStates = response.data.filter(item => {
        if(item.state.toUpperCase().includes(params.toUpperCase())){
            return item
        }
    });
    res.send({
        data: filteredStates,
        success: true
    });
});

router.get('/searchCityFromState', async(req, res) => {
    const state = req.query.state;
    const city = req.query.city;
    const response = await fetchCities();
    const filteredStates = response.data.filter(item => {
        if(item.state.toUpperCase().includes(state.toUpperCase())){
            return item
        }
    });
    const filteredCities = filteredStates.filter(item => {
        if(item.name.toUpperCase().includes(city.toUpperCase())){
            return item
        }
    });
    res.send({
        data: filteredCities,
        success: true
    })
})

module.exports = router;


