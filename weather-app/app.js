const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAdress(argv.address, (err, res) => {
    if (err)
        console.log(err);
    else {
        console.log(res.address);
        weather.getWeather(res.lat, res.lng, (err, res) => {
            if (err)
                console.log(err);
            else
                console.log(`It's currently ${res.temp}`);
        });
    }
});





