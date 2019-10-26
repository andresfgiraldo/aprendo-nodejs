'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MdlUsuario = Schema({
    username: String,
    email: String,
    password: String,
    nombre: String,
    foto: String,
    estado: String,
    modo: String,
    perfil: Number,
    create_time: Date,
    last_login: String,
    usuario_sistema: String,
    fecha_sistema: { type: Date, default: Date.now },
});

module.exports = mongoose.model('MdlUsuario', MdlUsuario);