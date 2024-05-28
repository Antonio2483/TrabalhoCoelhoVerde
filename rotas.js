const express = require('express');
const router = express.Router();

// Rota para obter dados
router.get('/', (req, res) => {
    res.send('Dados obtidos');
});

// Rota para adicionar dados
router.post('/', (req, res) => {
    const dados = req.body;
    res.status(201).send(`Dados adicionados: ${JSON.stringify(dados)}`);
});

module.exports = router;
