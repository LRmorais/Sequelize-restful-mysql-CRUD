module.exports = {
    // Variaveis de desenvolvimento
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'cadastro',
            dialect: 'mysql',
            user: 'root',
            password: ''
        }
    },
// variaveis em produção
    production: {
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
        }
    }
}