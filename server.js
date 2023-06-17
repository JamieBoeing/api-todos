require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = 3000



mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})


app.listen(PORT, () => {
    console.log(`we can here you at port ${PORT}`)
})