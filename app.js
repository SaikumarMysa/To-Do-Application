const express = require('express');

const morgan = require('morgan')

const app = express();

const toDoRouter = require('./routes/toDoRoutes');

//Middlewares
if(process.env.NODE_ENV==='development')
{
        app.use(morgan('dev'));

}

//middlewares
app.use(express.json());

//routes
app.use('/api/v1/', toDoRouter);

module.exports = app;