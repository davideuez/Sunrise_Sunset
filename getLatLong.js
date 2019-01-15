const fetch = require('node-fetch');
const url = 'http://open.mapquestapi.com/geocoding/v1/address?key=nwanmGe3J2upj1DvkHmHFUcKpGRKzFvu&location='

async function getLanLong(cityName) {

  const response = await fetch(url + cityName)
  const json = await response.json();

  console.log('Success:', JSON.stringify(json.results[0].locations[0].latLng))
  return json.results[0].locations[0].latLng

};

module.exports = {
  latLong: getLanLong
}