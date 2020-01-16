import express from 'express';
import dotenv from 'dotenv';
import signUp from '../server/router/signup';
import signIn from '../server/router/signin';
import announcement from '../server/router/announcement';
import updateAnnouncement from '../server/router/updateSpecialAnnounce';
import deleteAnnouncement from '../server/router/deleteAnnounce';
import getAnnouncement from '../server/router/getAnnounciment';

const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/v1/auth/signup',signUp);
app.use('/api/v1/auth/signin',signIn);
app.use('/api/v1/announcement',announcement);
app.patch('/api/v1/announcement/:id',updateAnnouncement);
app.patch('/api/v1/announcement/:id/sold',updateAnnouncement);
app.delete('/api/v1/announcement/:id',deleteAnnouncement);
app.use('/api/v1/announcement',getAnnouncement);
app.use('/api/v1/announcement/:id',getAnnouncement);
app.use('/api/v1/announcement/:status',getAnnouncement);
const PORT = process.env.PORT || 4000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`))

export default app;
