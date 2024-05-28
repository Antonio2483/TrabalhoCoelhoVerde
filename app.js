const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Importa rotas
const rotas = require('./rotas');

// Usa as rotas importadas
app.use('/professor', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
