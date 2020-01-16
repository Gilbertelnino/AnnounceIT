import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import storage from '../helper/storage'
import {signInValidation} from '../helper/userValidation'

const router = express.Router();
dotenv.config();

router.post('/',(req,res,next)=>{
    storage.find((user) => {
        if(user.email === req.body.email && user.email.length < 1){
            return res.status(404).json({
                message: 'Email not found'
            })
        } else{
            bcrypt.compare(req.body.password, user.password,(err,result) =>{
                if(err){
                    return res.status(401).json({
                        message: 'Authorization fail'
                    })
                } else if(result){
                    const currentUser = {
                        email: req.body.email,
                        password: req.body.password
                    }
                    const {error} = signInValidation(currentUser);
                    if(error){
                        return res.status(400).json({
                            message: error.details[0].message
                        })
                    } else{
                        jwt.sign({currentUser},process.env.JWT_KEY,(err,token)=>{
                            if(err){
                                return res.status(401).json({
                                    error: err
                                })
                            } else{
                                res.status(200).json({
                                    message:'User is successfully logged in',
                                    data:{
                                        token
                                    }
                                })
                            }
                        })
                    }
                } else{
                    return res.status(401).json({
                        message: 'Authorization fail again'
                    })
                }
            })
        }
    });
    next();
})


export default router;