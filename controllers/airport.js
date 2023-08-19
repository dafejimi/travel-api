const axios = require('axios');

let [
    airport_flights,
    airport_info
] = require('../options');

const get_airport_flights = async (req, res) => {
    if(!req.params.ident && !req.params.time && !req.params.direction) {
        return res.status(404).json({error: 'invalid request'})
    }

    let identifier = req.params.ident
    let flight_direction = req.params.direction
    let flight_time = req.params.time

    airport_flights[params][ident] = identifier
    airport_flights[params][direction] = flight_direction
    airport_flights[params][time] = flight_time

    const response = await axios.request(airport_flights)

    if(!response) {
        return res.status(404).json({error: 'resource unavailable'});
    }

    res.status(200).json(response.data)
}

const get_airport_info = async (req, res) => {
    if(!req.params.iata) {
        return res.status(404).json({error: 'invalid request'})
    }

    let iata_number = req.params.iata;
    airport_info[params][iata] = iata_number;

    const response = await axios.request(airport_info)    

    if (!response) {
        return res.status(404).json({error: 'resource unavailable'});
    }

    res.status(200).json(response.data)
}

module.exports = [
    get_airport_flights,
    get_airport_info
]