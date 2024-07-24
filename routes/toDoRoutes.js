const express = require('express');

const toDoController = require('./../controllers/toDoController');


const router = express.Router();

router.get('/todos', toDoController.showToDos);

router.post('/todos', toDoController.createToDo);

router.delete('/todos/:id' , toDoController.deleteToDo);

module.exports = router;