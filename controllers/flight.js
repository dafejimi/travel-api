const axios = require('axios');

let [
    flight_info,
    flight_search,
    flight_statistics
] = require('../options');

const get_flight_info = async (req, res) => {
    if(!req.params.flnr) {
        return res.status(404).json({error: 'invalid request'})
    }
    let flight_number = req.params.flnr;
    flight_info[params][flnr] = flight_number;

    const response = await axios.request(flight_info)

    if (!response) {
        return res.status(404).json({error: 'resource unavailable'});
    }

    res.status(200).json(response.data)
}

const get_flight_search = async (req, res) => {
    if(!req.params.flnr) {
        return res.status(404).json({error: 'invalid request'})
    }
    let flight_number = req.params.flnr;
    flight_info[params][flnr] = flight_number;

    const response = await axios.request(flight_search)

    if (!response) {
        return res.status(404).json({error: 'resource unavailable'});
    }

    res.status(200).json(response.data)
}

const get_flight_statistics = async (req, res) => {
    let flight_number = req.params.flnr;
    flight_info[params][flnr] = flight_number;
    
    const response = await axios.request(flight_statistics)   

    if (!response) {
        return res.status(404).json({error: 'resource unavailable'});
    }

    res.status(200).json(response.data)
}

module.exports = [
    get_flight_info,
    get_flight_search,
    get_flight_statistics
]