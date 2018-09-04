let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Nadal',
        birthYear: 1994,
    };
    setTimeout(() => {
        callback(user);
    }, 2000)
}


getUser(31, (user) => {
    console.log(user);
})