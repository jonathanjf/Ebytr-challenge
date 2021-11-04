const tasksModel = require('../models/tasks');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  console.log('chegou no service', tasks);
  return tasks;
}

const create = async (task) => {
  await tasksModel.create(task);
}

const update = async (id) => {
  await tasksModel.update(id);
};

const remove = async (id) => {
  await tasksModel.remove(id);
}

module.exports = {
  getAll,
  create,
  update,
  remove,
}