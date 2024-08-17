import express from 'express';
import { User, Thing } from '../models';

const router = express.Router();

router.get('/', async (_req, res) => {
  const users = await User.findAll({
    include: {
      model: Thing,
      attributes: ['name'],
    },
  });
  res.json(users);
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).end();
  }
});

export default router;
