'use strict'

var controller = {

    datos: (req, res) => {

        return res.status(200).send({
            autor: "Andres Giraldo",
            curso: "Node JS"
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            message: "soy la accion test de controlador usuarios"
        });
    }
}

module.exports = controller;