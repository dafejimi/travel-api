require("dotenv").config()

const flight_statistics = {
    method: 'GET',
    url: 'https://flightera-flight-data.p.rapidapi.com/flight/statistics',
    /*
        flnr(string) - The flight number to request
    */
    params: {flnr: ''},
    headers: {
      'X-RapidAPI-Key': process.env.X-RapidAPI-Key ,
      'X-RapidAPI-Host': process.env.X-RapidAPI-Host
    }
  };

const flight_info = {
    method: 'GET',
    url: 'https://flightera-flight-data.p.rapidapi.com/flight/info',
    /*
        flnr(string) - The flight number to request
    */
    params: {flnr: ''},
    headers: {
        'X-RapidAPI-Key': process.env.X-RapidAPI-Key ,
        'X-RapidAPI-Host': process.env.X-RapidAPI-Host 
    }
  };
const flight_search = {
    method: 'GET',
    url: 'https://flightera-flight-data.p.rapidapi.com/flight/search',
    /*
        flnr(string) - The flight number to request
    */
    params: {flnr: ''},
    headers: {
        'X-RapidAPI-Key': process.env.X-RapidAPI-Key ,
        'X-RapidAPI-Host': process.env.X-RapidAPI-Host 
    }
  };

const airport_info = {
    method: 'GET',
    url: 'https://flightera-flight-data.p.rapidapi.com/airport/info',
    /*
        iata(string) - The IATA code of the airport, must have a length of 3
    */
    params: {iata: ''},
    headers: {
        'X-RapidAPI-Key': process.env.X-RapidAPI-Key ,
        'X-RapidAPI-Host': process.env.X-RapidAPI-Host 
    }
}

const airport_flights = {
    method: 'GET',
    url: 'https://flightera-flight-data.p.rapidapi.com/airport/flights',
    /*
        ident(string) - Ident of the airport to request. Ident is the unique identifier,  as returned by /airport/info endpoints.
        direction(string) - Direction, one of "arrival" or "departure",
        time(string) - Timestamp in UTC(Format: '2023-08-12T12:00:00.000Z'). If direction is "arrival", show flights with scheduled arrival time prior to this timestamp. If direction is "departure", show flights with scheduled departure time after this timestamp.
    */
    params: {
      ident: '',
      direction: '',
      time: ''
    },
    headers: {
        'X-RapidAPI-Key': process.env.X-RapidAPI-Key ,
        'X-RapidAPI-Host': process.env.X-RapidAPI-Host 
    }
  };

module.exports = [
    flight_info,
    flight_search,
    flight_statistics,
    airport_flights,
    airport_info
]
