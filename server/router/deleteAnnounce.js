// import express from 'express';
// import verifyToken from '../helper/verifyToken';
// import announceStorage from '../helper/announcestr';

// const router = express.Router();

// router.delete('/api/v1/announcement/:id',verifyToken,(req,res)=>{
//     const foundAnnounce =  announceStorage.find(ads => ads.id === parseInt(req.params.id));
//     if(!foundAnnounce){
//         return res.status(404).json({
//             message: 'announcement with the given id not Found'
//         })
//     } else{
//         const index = announceStorage.indexOf(foundAnnounce);
//         announceStorage.splice(index,1)
//         res.status(200).json({
//                 message: 'Announcement deleted Successfully'
//         })
//     }

// })


// export default router;