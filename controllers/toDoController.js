const ToDo = require('./../models/ToDoModel');



//GET TODOs

exports.showToDos  = async(req,res)=>{

    const toDos = await ToDo.find();

    res.status(200).json({
    status: 'success',
    results: toDos.length,
    data:{
        
        toDos

        }
    })
}



//CREATE TODO

exports.createToDo = async(req,res)=>{
   
    const newToDo = await ToDo.create(req.body);

        res.status(201).json({

        status:'success',

        data:{

            newToDo

            }
        })
}


//DELETE ToDo

exports.deleteToDo = async(req,res)=>{

    const todo = await ToDo.findByIdAndDelete(req.params.id)

        res.status(200).json({

            status:'success',

            data:null

        })
}


