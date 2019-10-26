'use strict'

var mongoose = require('mongoose');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/aprendo_nodejs', {
    useNewUrlParser: true, //nueva sintaxis que incluye mongodb con mongoose
    useUnifiedTopology: true, // (node:9138) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    useFindAndModify: false //Metodos antiguos desactivados
}).then(() => {
    console.log("la conexion a la base de datos se realizó con éxito.!")
});