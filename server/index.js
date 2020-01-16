import express from 'express';
import dotenv from 'dotenv';
import signup from './router/signup';
import signin from './router/signin';
import announcement from './router/announcement';
import updateAnnouncement from './router/updateSpecialAnnounce';
import deleteAnnouncement from './router/deleteAnnounce';
import getAnnouncement from './router/getAnnounciment';

const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/v1/auth/signup',signup);
app.use('/api/v1/auth/signin',signin);
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
