import express from 'express';
import dotenv from 'dotenv';
import { services } from './routes/data.js';
import cors from 'cors';

const corsOptions = {
  origin: ['http://localhost:5173', "https://yourit.netlify.app"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({data: services})
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
