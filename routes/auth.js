import express from 'express';
const router = express.Router();

/* Auth Routes. */
router.get('/', (req, res) => {
  res.json({ message: 'this is auth routes!' });
});

export default router;
