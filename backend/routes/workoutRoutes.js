const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');


router.get('/',getWorkouts); // get all workouts
router.post('/',createWorkout); // create workout
router.get('/:id',getWorkout); //get a single workout
router.delete('/:id',deleteWorkout) //delete workout
router.patch('/:id',updateWorkout) //update workout

module.exports = router;