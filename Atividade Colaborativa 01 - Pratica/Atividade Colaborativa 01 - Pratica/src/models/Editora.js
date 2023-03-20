const Sequelize = require('sequelize')
const database = require('../database/db');

const Editora = database.define('editora', {
    codigo: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    localDeOrigem: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    nomeFantasia: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
});

Editora.sync();
  
module.exports = Editora;