require('dotenv').config()
const express = require('express');
const workoutRoute = require('./routes/workoutRoutes');
// express app
const app = express();

// middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
})

// routes 
app.use('/api/workouts', workoutRoute)

// listening requests 
app.listen(process.env.PORT, ()=>{
    console.log("listening for requests at port", process.env.PORT);
})