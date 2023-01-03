require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const workoutRoute = require('./routes/workoutRoutes');
// express app
const app = express();

// middleware
// to access body of the request 
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
})

// routes 
app.use('/api/workouts', workoutRoute)

// connect to database 
mongoose.connect(process.env.MONGO_URI)
    .then(
        // listening requests 
        app.listen(process.env.PORT, ()=>{
        console.log("connected to db & listening for requests at port", process.env.PORT);
        })
    )
    .catch(err => console.log(err));
