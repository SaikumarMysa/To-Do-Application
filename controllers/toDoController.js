const ToDo = require('./../models/ToDoModel');

//GET TODOs:

exports.showToDos  = async(req,res)=>{

    try{
        const toDos = await ToDo.find();
        res.status(200).json({
        status: 'success',
        results: toDos.length,
        data:{
        
            toDos

        }
    })
}catch(err){
    res.status(400).json({
    status: 'fail',
    message: err.message
    })
}}
    
//CREATE TODO

exports.createToDo = async(req,res)=>{

    try{
        const newToDo = await ToDo.create(req.body);
        res.status(201).json({
        status:'ToDo is created successfully',
        data:{

            newToDo

        }
    })
}catch(err){

    res.status(400).json({
    status: 'failed to create todo',
    message: err.message
    })

}}
   
//DELETE ToDo

exports.deleteToDo = async(req, res) =>{
    try{
        const todo = await ToDo.findByIdAndDelete(req.params.id)
        res.status(200).json({
        status:'ToDo is deleted successfully',
        data:null

    })
    }catch(err){
        res.status(400).json({
        status: 'failed to delete',
        message: err.message

})
}}


