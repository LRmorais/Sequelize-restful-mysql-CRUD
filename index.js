const http = require('http')
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes.js');
const router = require('./src/routes/routes.js');

// informando que os dados trabalhados estaram em json
app.use(express.json());
// a url base da aplicação, o que vier posteriormente seram as rotas
app.use('/sistema', routes);
// tratamento de erro geral, se NOT_FOUND -> enviar PAGE NOT FOUND
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND). send("Page not found");
});

app.use ((req,res,next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});
// sincronizando sequelize, force false significa criar as tabelas apenas uma vez.
sequelize.sync({force: false}). then ( () => {
    const port = 3003; //pode ser qualquer porta dependendo da situação
    app.set("port", port);
    const server = http.createServer(app); //inicia o servidor
    server.listen(port);
});