import express, { Application } from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes/api.js';  

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use('/api', apiRouter); 

export default app;
