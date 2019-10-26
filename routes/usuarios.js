'use strict'

var express = require('express');
var CtrUsuario = require('../controller/usuario');

var router = express.Router();

router.post('/crear', CtrUsuario.save);
router.get('/lista', CtrUsuario.list);
router.get('/usuario/:id?', CtrUsuario.get);
router.put('/actualizar/:id?', CtrUsuario.udpate);
router.delete('/borrar/:id?', CtrUsuario.delete);

module.exports = router;