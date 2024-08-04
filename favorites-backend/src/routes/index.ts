import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Hello world!');
});

router.post('/', (_req, res) => {
  res.send('Post received!');
});

export default router;
