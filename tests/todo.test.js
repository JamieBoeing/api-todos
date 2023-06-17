const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } =require('mongodb-memory-server')
const app = require('../app')
const Todo = require('../models/todos')
let mongoServer 

const server = app.listen(8080, () => {
    console.log('Testing on port 8080')
})
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri(), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
})
afterAll(async () => {
    await mongoose.connection.close()
        mongoServer.stop()
        server.close()
    })

describe('Test the Todo endpoints', () => {
   
    // GET all todo's
    test('It should get all to dos', async () => {
        const response = await request(app).get('/todos')
       
        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body.todos)).toBe(true)
        

    })
//     // POST create a new todo 
    test('It should create a new todo', async () => {

        const response = await request (app)
            .post('/todos')
            .send({
                title: 'New Todo',
                description: 'Todo description',
                completed: false

        })
  
        expect(response.statusCode).toBe(200)
        expect(response.body.todo.title).toEqual('New Todo')
        expect(response.body.todo.description).toEqual('Todo description')
        expect(response.body.todo.completed).toEqual(false)
    }) 

    // GET get a specific todo
    test('It should get a specific todo', async () => {
        const newTodo = new Todo({
            title: 'Expected Todo',
            description: 'Expected description',
            completed: true 
        })
        await newTodo.save()
    
        const response = await request(app).get(`/todos/${newTodo._id}`)
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    
    }) 

//     // PUT Update a specifiic todo
    test('It should update a todo', async () => {
        const newTodo = new Todo({
            title: 'Updated title',
            description: 'Updated description',
            completed: false
        })
    await newTodo.save()

    const updateTodo = {
        title: 'Updated title',
        description: 'Updated description',
        completed: false
    }
    const response = await request(app)
    .put(`/todos/${newTodo._id}`)
    .send(updateTodo)
   
    expect(response.statusCode).toBe(200)
    expect(response.body.todo.title).toEqual('Updated title')
    expect(response.body.todo.description).toEqual('Updated description')
    expect(response.body.todo.completed).toEqual(false)
}) 
// // // // DELETE a specific todo 
test('It should delete a todo', async () => {
    const todo = new Todo({ 
        title: 'title',
        description: 'description',
        completed: false
    })
    const saveTodo = await todo.save() 

    const response = await request(app).delete(`/todos/${saveTodo._id}`)

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ message: 'Todo Deleted' })

    const deleteTodo = await Todo.findById(saveTodo._id)
    expect(deleteTodo).toBeNull()
        })
})