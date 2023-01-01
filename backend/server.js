require('dotenv').config()
const express = require('express');

// express app
const app = express();

// middleware
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
})

// routes 
app.get('/', (req, res)=>{
    res.json({"mssg":"Welcome to the app"});
})

// listening requests 
app.listen(process.env.PORT, ()=>{
    console.log("listening for requests at port", process.env.PORT);
})