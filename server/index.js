import express from 'express';
import dotenv from 'dotenv';
import signUp from '../server/router/signup';
import signIn from '../server/router/signin';
import announcement from '../server/router/announcement';

const app = express();

dotenv.config();
app.use(express.json());

app.use('/api/v1/auth/signup',signUp);
app.use('/api/v1/auth/signin',signIn);
app.use('/api/v1/announcement',announcement);

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => console.log(`server running on port ${PORT}`))

export default app;
