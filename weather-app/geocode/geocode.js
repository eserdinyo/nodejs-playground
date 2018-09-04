const request = require('request');

const geocodeAdress = (adress, callback) => {
    let addressEncoded = encodeURIComponent(adress);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=ovyGMPIUryb90phV2y0CQIBAGyYuEa5U&location=${addressEncoded}`,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback('Unable to find that adress.');
        }
        else {
            callback(undefined, {
                address: body.results[0].providedLocation.location,
                lat: body.results[0].locations[0].latLng.lat,
                lng: body.results[0].locations[0].latLng.lng
            });
        }
    })
}

module.exports.geocodeAdress = geocodeAdress;