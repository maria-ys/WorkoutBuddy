const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout
} = require('../controllers/workoutController');

router.get('/',getWorkouts);

router.post('/',createWorkout);

router.get('/:id',getWorkout);

router.delete('/:id',(req,res)=>{
    res.json({mssg: "DELETE a single workout"});
})

router.patch('/:id',(req,res)=>{
    res.json({mssg: "PATCH a single workout"});
})

module.exports = router;