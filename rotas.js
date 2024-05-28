const express = require('express');
const router = express.Router();

// GET Todos os professores
router.get('/professores', (req, res) => {
    let dados = {};
    let dados2 = {};
    let dadosLista = [];

    dados.nome = "Teste 1";
    dados.matricola = "001";
    dados.data_de_nascimento = "01/01/1980";

    dados2.nome = "Teste 2";
    dados2.matricola = "002";
    dados2.data_de_nascimento = "01/01/1980";

    dadosLista.push(dados,dados2);"|"

    res.send(JSON.stringify(dadosLista));
});

// GET professor por matricola
router.get('/professor/:matricula', (req, res) => {
    const matricula = req.params.matricula;
    let dados = {};

    dados.nome = "Teste 1";
    dados.matricola = "001";
    dados.data_de_nascimento = "01/01/1980";

    res.send(JSON.stringify(dados));
});


// POST Adicionar professor
router.post('/professor/', (req, res) => {
    const dados = req.body;

    let retorno = {};
    retorno.status = 'Professor inserido com Sucesso!'

    res.send(JSON.stringify(retorno));
});

// PATCH alterar professor por matricola
router.patch('/professor/:matricula', (req, res) => {
    const dados = req.body;
    const matricula = req.params.matricula;

    let retorno = {};
    retorno.status = 'Professor alterado com Sucesso!'

    res.send(JSON.stringify(retorno));
});

router.delete('/professor/:matricula', (req, res) => {

    const dados = req.body;
    const matricula = req.params.matricula;

    console.log(matricula);

    let retorno = {};
    retorno.status = 'Professor excluído com Sucesso!'

    res.send(JSON.stringify(retorno));
});

module.exports = router;
