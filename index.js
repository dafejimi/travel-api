const express = require('express');
const app = express();

const flights = require('./routes/flight')
const airport =require('./routes/airport')


app.use('/flights', flights)

app.use('/airport', airport)


const port = process.env.PORT
app.listen(port, () => console.log(`listening on port ${port}...`))