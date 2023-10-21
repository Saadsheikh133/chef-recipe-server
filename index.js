const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefInfo = require('./data/chefInfo.json');
const foods = require('./data/foods.json');
const allFoods = require('./data/allFoods.json');
const reviews = require('./data/review.json');

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

app.get('/foods', (req, res) => {
    res.send(foods);
});

app.get('/foods:id', (req, res) => {
    const id = req.params.id;
    const selectedFood = allFoods.find(food => food.id === id);
    res.send(selectedFood);
});

app.get('/allFoods', (req, res) => {
    res.send(allFoods);
})

// review section
app.get('/reviews', (req, res) => {
    res.send(reviews);
});

app.listen(port, () => {
    console.log('hello world')
});