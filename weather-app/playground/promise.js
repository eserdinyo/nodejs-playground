const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a == "number" && typeof b == "number") {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500)
    })
}


asyncAdd(5, 4).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 1);
}).then((res) => {
    console.log('Result: ', res);
}).catch(err => {
    console.log(err);
})

/* const somePromie = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked');
        // reject('Unable to fulfill promise');
    }, 2500)

});

somePromie.then((msg) => {
    console.log('Success: ', msg);
}, (err) => {
    console.log('Error: ', err);
}); */
