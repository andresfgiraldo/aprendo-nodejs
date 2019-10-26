'use strict'

var validator = require('validator');
var Usuario = require('../model/usuario');

var controller = {

    save: (req, res) => {
        //recoger parametros del post
        var params = req.body;

        //validar datos (validator)
        try {

            var validate_username = !validator.isEmpty(params.username);

            if (validate_username) {

                //crear el objeto a guardar
                var usuario = new Usuario();

                //asignar valores
                usuario.username = params.username;
                usuario.email = params.email;


                //gardar el articulo
                usuario.save((err, usuarioStored) => {
                    if (err || !usuarioStored) {
                        return res.status(404).send({
                            status: "error",
                            message: "usuario no se pudo guardar"
                        });
                    }

                    //devolver una respuesta
                    return res.status(200).send({
                        status: "success",
                        message: "Usuario guardado correctamente",
                        usuario,
                    });
                });
            }



        } catch (error) {
            return res.status(200).send({
                status: "error",
                message: "Faltan datos.",
                error
            });
        }
    },
    list: (req, res) => {
        //find
        Usuario.find({}).sort('-_id').exec((err, usuarios) => {

            if (err) {
                return res.status(500).send({
                    status: "error",
                    message: err
                });
            }

            return res.status(200).send({
                status: "success",
                message: "Usuarios encontrado correctamente",
                usuarios
            });
        })

    },
    get: (req, res) => {

        var usuarioId = req.params.id;

        if (!usuarioId || usuarioId == null) {
            return res.status(404).send({
                status: "error",
                message: "No ha enviado el codigo del usuario"
            });
        }

        //find
        Usuario.findById(usuarioId, (err, usuario) => {

            if (err || !usuario) {
                return res.status(500).send({
                    status: "error",
                    message: "No existe usuario",
                    error: err
                });
            }

            return res.status(200).send({
                status: "success",
                message: "Usuario encontrado correctamente",
                usuario
            });
        })

    },
    udpate: (req, res) => {

        var usuarioId = req.params.id; //parametros de la ruta
        var params = req.body; //parametros en body

        if (!usuarioId || usuarioId == null) {
            return res.status(404).send({
                status: "error",
                message: "No ha enviado el codigo del usuario"
            });
        }

        try {
            var validate_username = !validator.isEmpty(params.username);

            if (validate_username) {
                Usuario.findOneAndUpdate({ _id: usuarioId }, params, { new: true }, (err, usuarioUpdated) => {
                    if (err || !usuarioUpdated) {
                        return res.status(404).send({
                            status: "error",
                            message: "usuario no se pudo actualizar"
                        });
                    }

                    //devolver una respuesta
                    return res.status(200).send({
                        status: "success",
                        message: "Usuario actualizado correctamente.",
                        usuario: usuarioUpdated,
                    });
                })
            }

        } catch (error) {
            return res.status(200).send({
                status: "error",
                message: "Faltan datos.",
                error
            });
        }

    },
    delete: (req, res) => {

        var usuarioId = req.params.id; //parametros de la ruta

        if (!usuarioId || usuarioId == null) {
            return res.status(404).send({
                status: "error",
                message: "No ha enviado el codigo del usuario"
            });
        }

        Usuario.findOneAndDelete({ _id: usuarioId }, (err, usuarioRemoved) => {
            if (err || !usuarioRemoved) {
                return res.status(404).send({
                    status: "error",
                    message: "usuario no se pudo eliminar"
                });
            }

            //devolver una respuesta
            return res.status(200).send({
                status: "success",
                message: "Usuario borrado correctamente.",
                usuario: usuarioRemoved,
            });
        });
    }
}

module.exports = controller;