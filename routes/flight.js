const express = require('express');
const router = express.Router();

let [
    get_flight_info,
    get_flight_search,
    get_flight_statistics
] = require('../controllers/flight');

router.get('/info/:flnr', get_flight_info)

router.get('/search/:flnr', get_flight_search)

router.get('/statistics/:flnr', get_flight_statistics)

module.exports = router