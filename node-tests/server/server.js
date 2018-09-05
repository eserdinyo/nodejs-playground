const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/players', (req, res) => {
    res.status(200).send([{
        name: "Nadal",
        age: 32,
    },
    {
        name: "Federer",
        age: 29
    }, {
        name: "Djokovic",
        age: 27
    }])
})

app.listen(3000);

module.exports.app = app;