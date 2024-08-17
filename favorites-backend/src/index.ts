import express from 'express';
import cors from 'cors';
import router from './controllers/index';
import { PORT } from './utils/config';
import { dbInit } from './utils/db';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', router);

const start = async () => {
  await dbInit();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
