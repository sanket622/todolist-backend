import express from 'express';
import Todo from '../models/Todo.js';

const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

router.post('/',async(req,res)=> {
    const newTodo = new Todo({
        text:req.body.text,
        completed:false
    });
    try{
        await newTodo.save();
        res.json(newTodo);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})

router.put('/:id',async(req,res)=>{
    try{
     const updatedTodo = await Todo.findByIdAndUpdate(req.params.id,req.body);
     res.json(updatedTodo);
    }
    catch(err){
     res.status(400).json({message:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
     await Todo.findByIdAndDelete(req.params.id)
     res.json({message:'Todo Deleted'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

export default router;