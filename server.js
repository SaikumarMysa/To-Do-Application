const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB,{
  
}).then(()=>{
    console.log('Database connection successful')
})

const port = process.env.PORT||8000;

app.listen(port,()=>{

    console.log(`Listening to server on port ${port}`)

})