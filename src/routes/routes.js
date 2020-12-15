// importa o express para poder utilizar seus metodos
const express = require('express');
// metodo router para gerenciar as rotas da aplicação
const router = express.Router();
// importa as operações definidas em usuarioController.js (get,post,delete,update)
const UsuarioController = require('../controllers/usuarioController.js');

// quando estiver na url /usuarios fazendo um post ele chama o metodo insert
router.post('/usuarios', UsuarioController.Insert);

module.exports = router;