
const Todo = require('../models/todos')


// GET / todos: get all todo items
exports.showAllTodos = async (req, res) => {
    try {
        const foundTodos = await Todo.find({ })
        res.json({ todos: foundTodos })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// POST / todos: Create a new todo item
exports.createTodo = async (req, res) => {
    try {
        const todo = await new Todo(req.body)
        await todo.save()
        res.json({ todo })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// GET / todos:id : Get a specific todo item
exports.getTodo = async (req, res) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id })
        res.json(todo)
    } catch {
        res.status(400).json({ message: error.message})
    }
}

// PUT / todos:id : Update a specific todo item
exports.updateTodo = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const todo = await Todo.findOne({ _id: req.params.id })
        updates.forEach(update => todo[update] = req.body[update])
        await todo.save()
        res.json({todo})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// DELETE / todos:id : Delete a specific too item 
exports.deleteTodo = async (req, res) => {
    try {
        const delteTodo = await Todo.deleteOne({ _id: req.params.id })
        res.json({ message: 'Todo Deleted' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

