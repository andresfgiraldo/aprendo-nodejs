'use strict'

// Cargar modulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');


// Ejecutar express para trabajar con HTTP
var app = express();

// Cargar las rutas - ficheros


// Middlewares - que se ejecuta antes de cargar una ruta
app.use(bodyParser.urlencoded({ extended: false })) // cargar el body parser en app
app.use(bodyParser.json()); //convertir todas las peticiones que lleguen a JSON

// CORS - activar para permitir peticiones desde frontend


// Prefijos a rutas

// Ruta o metodo de prueba para API
app.get('/probando', (req, res) => {

    //console.log("hola mundo");

    //regresar html
    /*return res.status(200).send(`
        <ul>
            <li>Andres</li>
            <li>Aura</li>
            <li>Santi</li>
            <li>Vale</li>
        </ul>
    `);*/

    //regresar JSON
    return res.status(200).send({
        autor: "Andres Giraldo",
        curso: "Node JS"
    });
})


// Exportar modulo (fichero actual) para usar app.js en index
module.exports = app;