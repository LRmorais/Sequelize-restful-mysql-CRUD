// importa tabelas e atributos criados em usuario.js
const Usuario = require('../models/usuario.js');
// biblioteca utilizada para tratamentos de erros
const status = require('http-status');


// Insert é um nome qualquer escolhido para definir um dos metodos get,post,delete ou update
// req -> requisição -> será um json armazenado posteriormente em uma variavel, res-> resposta
    exports.Insert = (req, res, next) => {

        // requisição.corpoDaRequisição.atributo
        const nome = req.body.nome;
        const salario = req.body.salario;
        const dataNascimento = req.body.dataNascimento;
        const ativo = req.body.ativo;

        // metodo de post do sequelize 
        Usuario.create({
            // primeiro nome é a propriedade do modelo(atributo no bd), segundo nome é a variavel com os dados armazenados
            nome: nome,
            salario: salario,
            dataNascimento: dataNascimento,
            ativo: ativo
        })
        // tratamento de erros
        .then(usuario => {
            if(usuario){
                res.status(status.OK).send(usuario);
            } else{
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    }
// método get para retornar todos os dados da tabela
    exports.SearchAll = (req, res, next) => {
        Usuario.findAll()
        .then(usuario => {
            if(usuario){
                res.status(status.OK).send(usuario);
            }
        })
        .catch(error => next(error));
    }
    