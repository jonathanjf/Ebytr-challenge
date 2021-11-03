const tasksService = require('../services/tasks');

const getAll = (_req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).json(tasks);
};

module.exports = {
  getAll,
}