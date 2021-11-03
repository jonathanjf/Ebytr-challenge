const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('tasks').findAll({}).toArray());

const create = async (task) => connection()
  .then((db) => db.collection('tasks').insertOne(task));

const update = async (id) => connection()
  .then((db) => db.collection('tasks').updateOne(id));

module.exports = {
  getAll,
  create,
}