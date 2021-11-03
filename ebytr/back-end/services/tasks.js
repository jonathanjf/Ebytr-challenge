const tasksModel = require('../models/tasks');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  return tasks;
}

const create = async (id) => {
  await tasksModel.create(id);
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
}