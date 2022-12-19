const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
var database;


const app = express ();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

require('./src/route/index')(app);

app.get('api/clients', (req, res) => {
    database.collection('client').find({}).toArray((error, result) => {
        if (err){
            res.status(200).send({message:'Hubo errores'});
        }
        else{
            res.status(200).send({message:'result'});
        }
        
    });
});

app.listen(3001, async () => {
    const URI = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(URI);

    try {
        await client.connect();
        console.log('SUCCESS');
        //database = result.db('react');

    } catch (e) {
        console.error(e);
    }
});



/*app.get('*', (req, res) => {
    return res.status(200).send({message: 'API V1 OK !'});
})*/


