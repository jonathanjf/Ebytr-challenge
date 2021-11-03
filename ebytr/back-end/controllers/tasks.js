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

const update = (req, res) => {
  const { id } = req.params;
  const taskUpdated = await tasksService.update(id);
  res.status(201).json(taskUpdated);
}

const remove = (req, res) => {
  const { id } = req.params;
  await tasksService.remove(id);
  res.status(200).json( { message: 'tarefa excluida com sucesso' } );
}

module.exports = {
  getAll,
  create,
  remove,
}