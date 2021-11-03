const express = require('express');
const bodyParser = require('body-parser');

const tasksController = require('./controllers/tasks');

const app = express();

app.use(bodyParser());

app.get('/tasks', tasksController.getAll);

app.post('/tasks', tasksController.create);

app.delete('/tasks/:id', tasksController.remove);

app.put('/tasks/:id', tasksController.update);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
