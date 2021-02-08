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

    // busca uma linha passando como parametro id
    exports.SearchOne = (req, res, next) => {
        const id = req.params.id;
    
        Usuario.findByPk(id)
            .then(usuario => {
                if (usuario) {
                    res.status(status.OK).send(usuario);
                } else {
                    res.status(status.NOT_FOUND).send();
                }
            })
            .catch(error => next(error));
    };
    
    
    //atualizar os dados
    exports.Update = (req, res, next) => {
        //na requisicao de atualizar
        //quando atualizamos enviamos o id, que vai ser pego da url
        const id = req.params.id;
        const nome = req.body.nome;
        const salario = req.body.salario;
        const dataNascimento = req.body.dataNascimento;
        const ativo = req.body.ativo;
    
        Usuario.findByPk(id)
            //primeiro precisamos verificar se o dado existe
            //then = registra o que queremos que aconteca quando a Promise for resolvida
            .then(usuario => {
                if (usuario) {
                    //se existir, vai atualizar
                    //passa um objeto com as infos
                    usuario.update({
                        nome: nome,
                        salario: salario,
                        dataNascimento: dataNascimento,
                        ativo: ativo
                    },
                        //recebe um parametro id na clausula where
                        {
                            where: { id: id }
                        })
                        .then(() => {
                            //status 200 é o padrao
                            res.status(status.OK).send();
                        })
                        .catch(error => next(error));
                } else {
                    //caso nao existir, retorna erro
                    res.status(status.NOT_FOUND).send();
                }
            })
            //catch = registra o que queremos que aconteca quando a Promise falhar
            .catch(error => next(error));
    };
    
    exports.Delete = (req, res, next) => {
        const id = req.params.id;
    
        Usuario.findByPk(id)
            .then(usuario => {
                if (usuario) {
                    usuario.destroy({
                        where: { id: id }
                    })
                        .then(() => {
                            res.status(status.OK).send();
                        })
                        .catch(error => next(error));
                }
                else {
                    res.status(status.NOT_FOUND).send();
                }
            })
            .catch(error => next(error));
    };