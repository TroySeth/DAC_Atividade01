const express = require('express');
const router = express.Router();
const livroController  = require('./src/controllers/livroController');
const editoraController  = require('./src/controllers/editoraController');
const path = require('path');

router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,"src","views","index.html"));
});

//livros

router.post('/criarLivro',livroController.criarLivro);

router.get('/listaDeLivros',livroController.listarLivros);

router.get('/livros',(req, res) => {
    res.sendFile(path.resolve(__dirname,"src","views","livros.html"));
});

router.put('/editarLivros',livroController.editarLivro);

router.get('/listarLivrosPorTitulo',livroController.listarLivrosPorTitulo);

//editora

router.post('/criarEditora',editoraController.criarEditora);

router.get('/listaDeEditoras',editoraController.listarEditoras);

router.get('/editoras',(req, res) => {
    res.sendFile(path.resolve(__dirname,"src","views","editoras.html"));
});

router.put('/editarEditora',editoraController.editarEditora);

router.get('/listarEditorasPorLocalDeOrigem',editoraController.listarEditorasPorLocalDeOrigem);

module.exports = router;