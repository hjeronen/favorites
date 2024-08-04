import express from 'express';

const router = express.Router();

router.get('/hello', (_req, res) => {
  res.json({ message: 'Hello world!' });
});

router.post('/', (_req, res) => {
  res.send('Post received!');
});

export default router;
