import express from 'express';
import { Thing, User, Comment, Rating } from '../models';

const router = express.Router();

router.get('/', async (_req, res) => {
  const things = await Thing.findAll({
    attributes: { exclude: ['userId'] }, // Thing model attributes, do not fetch userId
    include: [
      {
        model: User,
        attributes: ['name'], // User model attributes, get only name
      },
      {
        model: Comment,
        attributes: ['content'], // Try to get comments and users that added them
      },
      {
        model: Rating,
        attributes: ['rating'], // Try to get ratings for things
      },
    ],
  });
  res.json(things);
});

router.post('/', async (req, res) => {
  try {
    const thing = await Thing.create(req.body);
    return res.json(thing);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const thing = await Thing.findByPk(req.params.id);
    await thing?.destroy();
    return res.status(200).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default router;
