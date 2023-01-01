const express = require('express');

// express app
const app = express();

// listening requests 
app.listen(3000, ()=>{
    console.log("listening for requests at port 3000");
})