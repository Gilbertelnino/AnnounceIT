import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/' ,(req,res) => {
    res.send({message:'Welcome gilbert this is your first test for api'})
})
const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`))

export default app;
