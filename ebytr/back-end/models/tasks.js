const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('tasks').findAll({}).toArray());

module.exports = {
  getAll,
}