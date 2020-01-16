import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import newUser from '../helper/storage';
import {signUpValidation} from '../helper/userValidation';

const router = express.Router();
dotenv.config();

router.post('/',(req,res,next)=>{
    const user = newUser.find(us => us.email === req.body.email && us.email.length >= 1);
    if(user){
        return res.status(409).json({
            message: 'Email already exist'
        });
    } else{
        bcrypt.hash(req.body.password,10,(err,hash)=>{
            if(err){
                return res.status(401).json({
                    error: err
                });
            } else{
                const newUsers = {
                    id: newUser.length + 1,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hash,
                    phoneNumber: req.body.phoneNumber,
                    address: req.body.address
                };
                const { error } = signUpValidation(newUsers);
                if(error) {
                    return res.status(400).json({
                        message: error.details[0].message
                    });
                } else{
                    jwt.sign({newUsers},process.env.JWT_KEY,(err,token)=>{
                        if(err){
                            return res.status(400).json({
                                error: err
                            })
                        } else{
                            newUser.push(newUsers);
                            res.status(201).json({
                                message: 'User created successfully',
                                data: {
                                    token
                                }
                            })
                        }
                    })
                }
            }
        })
    }
    next();
})

export default router;