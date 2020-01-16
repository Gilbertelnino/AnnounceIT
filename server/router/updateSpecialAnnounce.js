import express from 'express';
import announceStorage from '../helper/announcestr';
import announceValidation from '../helper/announceValidation';
import verifyToken from '../helper/verifyToken'

const router = express.Router();

router.patch('/api/v1/announcement/:id',verifyToken,(req,res,next)=>{
    const announceFound = announceStorage.find(ads => ads.id === parseInt(req.params.id));
    const {error} = announceValidation(announceFound);
    if(!announceFound){
        return res.status(404).json({
            message: 'Announcement with given id Not Found'
        })
    } else if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    } else{
        announceFound.text = req.body.text;
        res.status(200).json({
            message: 'announcement successfully updated',
            data: {
                id: announceFound.id,
                text: req.body.text,
                start_date: new Date(),
                end_date: new Date().setFullYear(2020, 10, 14)
            }
        })
    }
    next();
})

// router.patch('/api/v1/announcement/:id/sold',verifyToken,(req,res)=>{
//     const announceFound = announceStorage.find(ads => ads.id === parseInt(req.params.id));
//     const {error} = announceValidation(announceFound);
//     if(!announceFound){
//         return res.status(404).json({
//             message: 'Announcement with given id Not Found'
//         })
//     } else if(error){
//         return res.status(400).json({
//             message: error.details[0].message
//         })
//     } else{
//         announceFound.text = req.body.text;
//         res.status(201).json({
//             data: {
//                 id: announceFound.id,
//                 text: req.body.text,
//                 start_date: new Date(),
//                 end_date: new Date().setFullYear(2020, 10, 14)
//             }
//         })
//     }

// });



export default router;