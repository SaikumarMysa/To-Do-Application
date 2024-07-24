const express = require('express');
const app = express();
//middlewares
app.use(express.json());
//routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/jobs', jobRouter);



module.exports = app;