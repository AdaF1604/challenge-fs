const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require("dotenv").config();


// settings
const app = express();
const port = process.env.PORT || 4000;

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

//inicamos el servidor
app.listen(4000,() => console.log('servidor en funcionamiento on PORT'));


//configuracion de motor de plantillas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//configuracion de archivos estaticos
app.use(express.static(__dirname + "/public"));

//rutas de la api
app.use('/', require('./router/rutasweb.js'));
app.use('/movimientos', require ('./router/movimientos'));