import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import haberRouter from './routes/haber';  // <-- Bunu ekle

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/haber', haberRouter);  // <-- Bunu ekle

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
