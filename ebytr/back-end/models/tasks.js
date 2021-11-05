const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('tasks').find({}).toArray());

const create = async (task) => connection()
  .then((db) => db.collection('tasks').insertOne({ task }));

const update = async (id) => connection()
  .then((db) => db.collection('tasks').updateOne(id));

const remove = async (id) => connection()
  .then((db) => db.collection('tasks').deleteOne(id));

module.exports = {
  getAll,
  create,
  update,
  remove,
}
