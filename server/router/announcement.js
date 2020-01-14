import express from 'express';
import verifyToken from '../helper/verifyToken';
import announcevalidation from '../helper/announceValidation';
import announceStorage from '../helper/announcestr';

const router = express.Router();

router.post('/',verifyToken,(req,res)=>{
    const newAnnouncement = {
        id: announceStorage.length + 1,
        text: req.body.text,
    };
     const {error} = announcevalidation(newAnnouncement);
     if(error){
         return res.status(400).json({
            message: error.details[0].message
         })
     } else{
         announceStorage.push(newAnnouncement);
         res.status(201).json({
             data:{
                 id:newAnnouncement.id,
                 text: req.body.text,
                 start_date: new Date(),
                 end_date: new Date().setFullYear(2020, 10, 14)
             }
         })
     }
});

export default router;