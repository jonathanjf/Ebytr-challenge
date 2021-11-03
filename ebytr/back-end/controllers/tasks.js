const tasksService = require('../services/tasks');

const getAll = (_req, res) => {
  const tasks = await tasksService.getAll();
  res.status(200).json(tasks);
};

const create = (req, res) => {
  const { task } = req.body;
  const taksCreated = await tasksService.create({ task });
  res.status(201).json(taksCreated);
}

module.exports = {
  getAll,
  create,
}