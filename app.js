'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');


// Ejecutar express para trabajar con HTTP
var app = express();

// Cargar las rutas - desde ficheros
var usuarios_routes = require('./routes/usuarios');


// Middlewares - que se ejecuta antes de cargar una ruta
app.use(bodyParser.urlencoded({ extended: false })) // cargar el body parser en app
app.use(bodyParser.json()); //convertir todas las peticiones que lleguen a JSON


// CORS - activar para permitir peticiones desde frontend


// Prefijos a rutas
app.use('/api/usuarios', usuarios_routes);



// Exportar modulo (fichero actual) para usar app.js en index
module.exports = app;