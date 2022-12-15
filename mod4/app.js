const express = require('express');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//const compression = require('compression');
const cors = require('cors');
const morgan = require('morgan');


const app = express ();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

require('./src/route/index')(app);

app.listen(3001);

app.get('*', (req, res) => {
    return res.status(200).send({message: 'API V1 OK !'});
})


