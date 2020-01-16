import express from 'express';
import announceStorage from '../helper/announcestr';

const router = express.Router();

router.get('/',(req,res,next)=>{
     res.status(200).json({
         data: {
             announceStorage
         }
     });
     next();
})




router.get('/:id',(req,res,next)=>{
    const foundAnnounce = announceStorage.find(ads => ads.id === parseInt(req.params.id));
    if(!foundAnnounce){
        return res.status(404).json({
            message: 'Not found'
        })
    } else{
        res.status(200).json({
            data: foundAnnounce
        })
    }
    next();
})


router.get('/:status',(req,res)=>{
    const foundquery = announceStorage.find(ads => ads.status === req.query);
    if(!foundquery){
        return res.status(404).json({
            message: 'Not Found'
        })
    } else{
        return res.status(200).json({
            data: foundquery
        })
    }
})
export default router;