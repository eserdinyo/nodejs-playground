const request = require('request');


const geocodeAdress = adress => {
    return new Promise((resolve, reject) => {
        let addressEncoded = encodeURIComponent(adress);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=ovyGMPIUryb90phV2y0CQIBAGyYuEa5U&location=${addressEncoded}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject('Unable to find that adress.')
            }
            else {
                resolve({
                    address: body.results[0].providedLocation.location,
                    lat: body.results[0].locations[0].latLng.lat,
                    lng: body.results[0].locations[0].latLng.lng
                })
            }
        })
    })
};

geocodeAdress('karabuk').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (err) => {
    console.log(err);
})