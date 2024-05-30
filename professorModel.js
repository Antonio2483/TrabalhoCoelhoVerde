const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
    nome: String,
    matricula: String,
    data_de_nascimento: String,
});

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
