const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();

// Configurações
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'View'));
app.use(express.urlencoded({ extended: true }));

// Rotas
const rotaCalculadora = require('./rotas/rotas');
app.use('/', rotaCalculadora);

const PORT = 8080;
app.listen(PORT, function(){
    console.log(`Rodando na porta ${PORT}`);
});