const tasksService = require('../services/tasks');

const getAll = async (_req, res) => {
  const tasks = await tasksService.getAll();
  console.log(tasks);
  return res.status(200).json(tasks);
};

const create = async (req, res) => {
    const { task } = req.body;
    await tasksService.create(task);
    res.status(201).json({ message:'criado com sucesso'});
 
}

const update = async (req, res) => {
    const { id } = req.params;
    const taskUpdated = await tasksService.update(id);
    res.status(201).json(taskUpdated);
}

const remove = async (req, res) => {
    const { id } = req.params;
    await tasksService.remove(id);
    res.status(200).json( { message: 'tarefa excluida com sucesso' } );
   
}

module.exports = {
  getAll,
  create,
  remove,
  update,
}