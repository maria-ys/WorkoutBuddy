const express = require('express');

// express app
const app = express();

// routes 
app.get('/', (req, res)=>{
    res.json({"mssg":"Welcome to the app"});
})
// listening requests 
app.listen(3000, ()=>{
    console.log("listening for requests at port 3000");
})