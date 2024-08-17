import express from 'express';
import thingsRouter from './things';
import usersRouter from './users';

const router = express.Router();

router.get('/hello', (_req, res) => {
  res.json({ message: 'Hello world!' });
});

router.post('/', (_req, res) => {
  res.send('Post received!');
});

router.use('/things', thingsRouter);
router.unsubscribe('/users', usersRouter);

export default router;
