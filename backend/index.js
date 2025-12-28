import express from 'express';
import dotenv from 'dotenv';
import { services } from './routes/data.js';
import cors from 'cors';

const corsOptions = {
  origin: [
    "http://localhost:5173",   // local dev (Vite/React)
    "https://yourit.netlify.app" // deployed frontend
  ],
  credentials: true, // allow cookies / auth headers
  optionsSuccessStatus: 200 // ✅ typo fixed: should be "optionsSuccessStatus"
};

app.use(cors(corsOptions));

dotenv.config();
const app = express();
app.use(express.json());


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({data: services})
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
