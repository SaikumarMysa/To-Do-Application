const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({

    text:{
        type: String,
        required: [true,'Enter any text'],
        lowercase: true,
        trim: true
    }
    
},
{timestamps:true}
)  

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;