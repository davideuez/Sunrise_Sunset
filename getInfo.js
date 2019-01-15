const fetch = require('node-fetch');
const url = 'https://api.sunrise-sunset.org/json?lat='

async function getInfo(lat, lon) {

  const response = await fetch(url + lat + '&lng=' + lon)
  const json = await response.json();

  console.log('Sunrise:', JSON.stringify(json.results.sunrise))
  console.log('Sunset:', JSON.stringify(json.results.sunset))
  //return json.results[0].locations[0].latLng

};

module.exports = {
  sunInfo: getInfo
}