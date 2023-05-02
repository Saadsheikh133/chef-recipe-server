const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefInfo = require('./data/chefInfo.json');

app.get('/', (req, res) => {
    res.send('api comming soon')
})

app.get('/chefInfo', (req, res) => {
    res.send(chefInfo);
})

app.listen(port, () => {
    console.log('hellow world')
})