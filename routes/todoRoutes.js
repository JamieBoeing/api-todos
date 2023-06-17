const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')

// GET / todos: get all todo items
router.get('/', todoController.showAllTodos)

// // POST / todos: Create a new todo item
router.post('/', todoController.createTodo)

// // GET / todos:id : Get a specific todo item
router.get('/:id', todoController.getTodo)

// // PUT / todos:id : Update a specific todo item
router.put('/:id', todoController.updateTodo)

// // DELETE / todos:id : Delete a specific todo item 
router.delete('/:id', todoController.deleteTodo)

module.exports = router