const express = require('express');
const router = express.Router();

const [
    get_airport_flights,
    get_airport_info
] = require('../controllers/airport')

router.get('/flights/:ident/:direction/:time', get_airport_flights)

router.get('/info/:iata', get_airport_info)


module.exports = router