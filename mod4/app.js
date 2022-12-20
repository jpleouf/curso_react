const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');
const MongoClient = require('mongodb').MongoClient;
//var database;


const app = express ();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

require('./src/route/index')(app);
/*
app.get('*', (req, res) => {
    database.collection('client').find({}).toArray((error, result) => {
        //console.log(database);
        if (error){
            res.status(200).send({message:'Hubo errores'});
        }
        else{
            res.status(200).send({message:result});
        }
        
    });
});*/

app.get('*', (req, res) => {
    return res.status(200).send({message: 'API V1 OK !'});
})


app.listen(3001, async () => {
    const URI = 'mongodb://127.0.0.1:27017';
//    const client = new MongoClient(URI);
new MongoClient(URI)
.connect()
.then((client) => {
    //database = client.db('react');
    console.log('Connected to DB');
    app.set('DATABASE',client.db('react'));
})
.catch((error) => {
    console.log('Error DB: '+error);
})


    /*try {
        await client.connect();
        console.log('SUCCESS');
        database = client.db('react');
        //console.log(database);
        database.collection('client').find().toArray((error, result) => {
            result.forEach((val)=>{
                console.log(val);
            });
        });
    
    } catch (e) {
        console.error(e);
    }*/
});





