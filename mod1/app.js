const express = require('express');
const app = express();
const port=3000;
//const mensaje='welcome';

app.get('/',(req, res) => {
    res.send('welcome');
});

app.get('/otra_pagina',(req, res) => {
    res.send('Bienvenue');
});

app.listen(port, () => {
    console.log('Servidor corriendo');
});