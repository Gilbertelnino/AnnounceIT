import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(403).json({
            message: 'Forbidden'
        })
    } try{
        const verified = jwt.verify(token,process.env.JWT_KEY);
        req.user = verified;
         next();
    }catch(err){
        res.status(400).json({
            message: 'invalid token'
        })
    }
}

export default verifyToken;