const Editora = require('../models/Editora');

const criarEditora = (req, res) => {
  const localDeOrigem = req.body.localDeOrigem;
  const nomeFantasia = req.body.nomeFantasia;

  const editora = Editora.build({ localDeOrigem, nomeFantasia });
  editora.save().then(() => {
    res.status(200).send('Editora criada!');
  }).catch((error) => {
    res.status(400).send(error);
  });
};

const editarEditora = (req, res) => {
  const Id = req.query.codigo;
  const localDeOrigem = req.body.localDeOrigem;
  const nomeFantasia = req.body.nomeFantasia;

  Editora.findByPk(Id).then((editora) => {
    editora.localDeOrigem = localDeOrigem;
    editora.nomeFantasia = nomeFantasia;
    return editora.save();
  }).then(() => {
    res.status(200).send('Editora editada!');
  }).catch((error) => {
    res.status(400).send(error);
  });
};

const listarEditoras = (req, res) => {
  Editora.findAll().then((editoras) => {
    res.status(200).json(editoras);
  }).catch((error) => {
    res.status(400).send(error);
  });
};

const listarEditorasPorLocalDeOrigem = (req, res) => {
    const localDeOrigem = req.query.localDeOrigem;
  
    Editora.findAll({
      where: { localDeOrigem: localDeOrigem }
    }).then((editoras) => {
        res.status(200).json(editoras);
      }).catch((error) => {
        res.status(400).send(error);
      });
  };
  

module.exports = { criarEditora, editarEditora, listarEditoras, listarEditorasPorLocalDeOrigem };
