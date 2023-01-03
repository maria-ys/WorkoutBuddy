const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');
// get all workouts
const getWorkouts = async (req, res)=>{
    const workouts = await Workout.find({}).sort({updatedAt: -1});

    res.status(200).json(workouts);
}
// get a single workout 

const getWorkout = async (req, res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({"error": "No such record found"});
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({"error": "No such record found"});
    }

    res.status(200).json(workout);
}
// create a workout 
const createWorkout = async (req, res)=>{
    const {title, reps, load} = req.body;

    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }
    catch(error){
        res.status(404).json({"error": error.message})
    }
}
// delete a workout 

// update a workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}