const express = require('express');
const Workout = require('../models/workoutModel');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({mssg: "GET all workout"});
})

router.post('/',async (req,res)=>{
    const {title, reps, load} = req.body;

    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }
    catch(error){
        res.status(404).json({"error": error.message})
    }
})

router.get('/:id',(req,res)=>{
    res.json({mssg: "GET a single workout"});
})

router.delete('/:id',(req,res)=>{
    res.json({mssg: "DELETE a single workout"});
})

router.patch('/:id',(req,res)=>{
    res.json({mssg: "PATCH a single workout"});
})

module.exports = router;