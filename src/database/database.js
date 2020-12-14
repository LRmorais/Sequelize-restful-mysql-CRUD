// chama os metodos do sequelize e armazenando na variavel Sequelize
const Sequelize = require('sequelize');
// definindo um ambiente de desenvolvimento 
const environment = process.env.NODE_ENV || 'development';
// importa todos os parametros do banco de dados que foi definido no arquivo config.js
const config = require('../config/config.js')[environment];
// chamando os parametros para o sequelize
const sequelize = new Sequelize (
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;