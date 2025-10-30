const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('first serverrrrr')
})

app.get('/profile', (req, res) =>{
    res.send('this is my profile Bro!!!')
})

app.listen(port)