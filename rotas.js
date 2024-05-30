const express = require('express');
const router = express.Router();
const Professor = require('./professorModel');

// GET Todos os professores
router.get('/professores', async (req, res) => {
    try {
        let professores = await Professor.find({});
        res.json(professores);
    } catch (err) {
        console.log("Erro ao buscar professor:", err);
        res.status(500).send(`Ocorreu um erro na busca: ${err}`);
    }
});

// GET professor por matricola
router.get('/professor/:matricula', async (req, res) => {
    let matricula = req.params.matricula;

    try {
        let professor = await Professor.findOne({ matricula: matricula });
        if (professor) {
            res.json(professor);
        } else {
            res.status(404).send({ message: "Professor não encontrado" });
        }
    } catch (err) {
        console.log("Erro ao buscar professor:", err);
        res.status(500).send(`Ocorreu um erro na busca: ${err}`);
    }
});


// POST Adicionar professor
router.post('/professor/', async (req, res) => {

    let professorInsert = new Professor({
        nome: req.body.nome,
        matricula: req.body.matricula,
        data_de_nascimento: req.body.data_de_nascimento
    });

    try {

        let professor = await Professor.findOne({ matricula: req.body.matricula });
        if (professor) {
            res.status(500).json({ status: 'Erro ao inserir professor', mensagem: 'Nao e possivel inserir um professor com matricola repetida'})
        } else{

            await professorInsert.save();
            res.json({ status: 'Professor inserido com sucesso!' });

        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Erro ao inserir professor', mensagem: err });
    }
});

// PATCH alterar professor por matricola
router.patch('/professor/:matricula', async (req, res) => {
    const dados = req.body;
    let matriculaUpdate = req.params.matricula;

    delete dados.matricula;

    console.log("UPDATE: ", dados);

    try {

        let update = await Professor.findOneAndUpdate(
            { matricula: matriculaUpdate },
            { $set: dados }
        );
        if (update) {
            res.json({ status: 'Professor alterado com Sucesso!' });
        } else {
            res.status(404).send({ message: "Professor não encontrado" });

        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Erro ao alterar professor', mensagem: err });
    }
});

router.delete('/professor/:matricula', async (req, res) => {
    const matricula = req.params.matricula;

    try {

        let del = await Professor.findOneAndDelete(
            { matricula: matricula }
        );
        if (del) {
            res.json({ status: 'Professor excluído com Sucesso!' });
        } else {
            res.status(404).send({ message: "Professor não encontrado" });

        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 'Erro ao excluir professor', mensagem: err });
    }
});

module.exports = router;
