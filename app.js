const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

const rotas = require('./rotas');

// Função para conectar ao MongoDB e iniciar o servidor
async function connectAndStartServer(uri) {
    try {
        // Conecta ao MongoDB usando a URI fornecida
        await mongoose.connect(uri);
        console.log('Conexão com o MongoDB estabelecida');

        // Adiciona as rotas ao servidor Express
        app.use('/', rotas);

        // Inicia o servidor Express
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    } catch (err) {
        console.error('Erro ao conectar com o MongoDB:', err);
    }
}

require('dotenv').config();

connectAndStartServer(process.env.MONGODB_URI);
