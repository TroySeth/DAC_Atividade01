const Sequelize = require('sequelize')
const database = require('../database/db');

const Livro = database.define('livro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      dataDeLancamento: {
        type: Sequelize.DATE,
        allowNull: false,
      },
}, { tableName: 'livro' })

Livro.sync();

module.exports = Livro;