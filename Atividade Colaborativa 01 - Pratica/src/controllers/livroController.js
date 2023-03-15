const Livro = require('../models/Livro');

const criarLivro = (req, res) => {
    const titulo = req.body.titulo;
    const dataDeLancamento = req.body.dataDeLancamento;
  
    const livro = Livro.build({ titulo, dataDeLancamento });
    livro.save().then(() => {
        res.status(200).send('Livro criados!');
      }).catch((error) => {
        res.status(400).send(error);
      });
};
  
const editarLivro = (req, res) => {
  const livroId = req.body.id;
  const titulo = req.body.titulo;
  const dataDeLancamento = req.body.dataDeLancamento;

  Livro.findByPk(livroId).then((livro) => {
      livro.titulo = titulo;
      livro.dataDeLancamento = dataDeLancamento;
      return livro.save();
    }).then(() => {
      res.status(200).send('Livro editado!');
    }).catch((error) => {
      res.status(400).send(error);
    });
};

const listarLivros = (req, res) => {
  Livro.findAll().then((livros) => {
      res.status(200).json(livros);
    }).catch((error) => {
      res.status(400).send(error);
    });
};

const listarLivrosPorTitulo = (req, res) => {
  const titulo = req.body.titulo;

  Livro.findAll({
    where: { titulo: titulo },
    order: [['titulo', 'ASC']]
  }).then((livros) => {
      res.status(200).json(livros);
    }).catch((error) => {
      res.status(400).send(error);
    });
};


module.exports = {criarLivro,editarLivro,listarLivros,listarLivrosPorTitulo};