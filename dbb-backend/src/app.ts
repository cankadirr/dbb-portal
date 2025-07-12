// dbb-backend/src/app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import haberRouter from './routes/haber.route';
import duyuruRouter from './routes/duyuru.route';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/haber', haberRouter);
app.use('/api/duyuru', duyuruRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

export default app;
