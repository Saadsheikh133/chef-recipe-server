const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefInfo = require('./data/chefInfo.json');
const foods = require('./data/foods.json');

app.get('/', (req, res) => {
    res.send('api comming soon')
});

app.get('/chefInfo/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefInfo.find(info => info.id === id);
    res.send(selectedChef)
});

app.get('/chefInfo', (req, res) => {
    res.send(chefInfo);
});

app.get("/foods", (req, res) => {
    res.send(foods);
});

app.listen(port, () => {
    console.log('hello world')
});