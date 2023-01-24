const express = require('express');
const mongoose = require('mongoose')
const todoHandler = require('./routeHandler/todoHandler')

const app = express()
app.use(express.json)

mongoose
    .connect( "mongodb://127.0.0.1:27017/todo")
    .then(() => console.log('connect success'))
    .catch((err) => console.log(err))

app.use('/todo', todoHandler)  


app.listen(5000, () => {
    console.log('app listening on port 5000')
})