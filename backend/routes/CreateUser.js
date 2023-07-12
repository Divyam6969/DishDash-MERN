//It has login and signup routes

const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const { Mode } = require('@mui/icons-material');
const{body,validationResult} = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "dishdash";

router.post("/createuser",
  [body("email").isEmail(),
    body("password","Incorrect password").isLength({min:5})],
async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password,salt);
    try{
        await User.create({
                name: req.body.name,
                location: req.body.location,
                password: securePassword,
                email: req.body.email
            });
        res.json({success:true});
    }catch(error)
    {
        console.log(error);
        res.json({success:false})
    }
});

router.post("/loginuser",
    [body("email").isEmail(),
    body("password","Incorrect password").isLength({min:5})],
    async (req,res)=>{
    const errors = validationResult(req);
    let email = req.body.email;
    try{

        let userData = await User.findOne({email});
        if(!userData)
        {
            return res.status(400).json({errors:[{msg:"Invalid Credentials"}]});
        }

        const passwordCompare = await bcrypt.compare(req.body.password,userData.password);
        if(!passwordCompare)
        {
            return res.status(400).json({errors:[{msg:"Invalid Credentials"}]});
        }
        const data = {
            user:{
                id:userData.id
            }
        }
        
        return res.status(200).json({success:true,authToken:jwt.sign(data,JWT_SECRET)});
    }catch(error)
    {
        console.log(error);
        res.json({success:false})
    }
});

module.exports = router;