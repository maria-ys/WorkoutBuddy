const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({mssg: "GET all workout"});
})

router.post('/',(req,res)=>{
    res.json({mssg: "POST workout"});
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