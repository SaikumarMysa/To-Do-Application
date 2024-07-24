const express = require('express');

const app = express();

const toDoRouter = require('./routes/toDoRoutes')

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/todos', toDoRouter);

module.exports = app;