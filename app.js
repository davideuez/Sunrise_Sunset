const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const latLong = require('./getLatLong').latLong
const sun = require('./getInfo').sunInfo

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

var cities = [
  "Washington,DC",
  "Los Angeles,California",
  "New York,NY"
]

// Percorsi per gestire le richieste 

app.get('/', function (req, res) {
  res.send('You are in the main route!');
});

app.get('/cities', async (req, res) => {

  var latLenMap = []

  for (i = 0; i < cities.length; i++) {
    risultato = await latLong(cities[i])
    latLenMap.push(risultato)

    sun(latLenMap[i].lat, latLenMap[i].lng)
  }


  res.send(latLenMap)
});

// Server in ascolto sulla porta ...
app.listen(port, function () {
  console.log('Server running on port ', port);
});