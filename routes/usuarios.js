'use strict'

var express = require('express');
var CtrUsuario = require('../controller/usuario');

var router = express.Router();

router.get('/test', CtrUsuario.test);
router.post('/datos', CtrUsuario.datos);

module.exports = router;