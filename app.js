const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const rotas = require('./rotas');

app.use('/', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
