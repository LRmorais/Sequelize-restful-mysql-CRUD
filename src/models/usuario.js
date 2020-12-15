// chama os metodos do sequelize e armazenando na variavel Sequelize
const Sequelize = require('sequelize');
// importa os atributos definidos em database.js
const sequelize = require('../database.js');
// criação de tabela na base de dados // ps precisa ter criado a base de dados
const Usuario = sequelize.define("usuario",{
    //definir colunas e atributos
    id: {
        allowNull: false, //nao permite nulos
        autoIncrement: true, // auto incremento
        primaryKey: true, //define chave primaria
        type: Sequelize.INTEGER // definido como um inteiro
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100), //define tipo string com tamanho de 100 caracteres
        validate: {
            len: [3,100] // validação de quantidade minima e maxima de caracteres
        }
    },
    salario: {
        allowNull: false,
        type: Sequelize.DOUBLE,
        validate: {
            len: [1,99999]
        }
    },
    dataNascimento:{
        allowNull: false,
        type: Sequelize.DATE()
    },
    ativo: {
        allowNull: true,
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
});

module.exports = Usuario