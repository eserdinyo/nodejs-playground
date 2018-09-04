const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7ad30f5fa9bc8f8ffbcf62d5b067efe6/${lat},${lng}`,
        json: true
    }, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            callback(undefined, {
                temp: body.currently.temperature,
            })
        } else {
            callback('Unable to fetch weather');
        }
    })
}

module.exports.getWeather = getWeather;