const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geoUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=ovyGMPIUryb90phV2y0CQIBAGyYuEa5U&location=${encodedAddress}`;

axios.get(geoUrl).then(res => {
    const lat = res.results[0].locations[0].latLng.lat;
    const lng = res.results[0].locations[0].latLng.lng;

    const weatherUrl = `https://api.darksky.net/forecast/7ad30f5fa9bc8f8ffbcf62d5b067efe6/${lat},${lng}`;

    return axios.get(weatherUrl);

}).then(res => {
    console.log('Temp: ', res.currently.temperature);
}).catch(err => {
    console.log(err);
});