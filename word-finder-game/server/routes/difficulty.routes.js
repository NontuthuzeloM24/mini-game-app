import express from 'express'
import { difficulties } from '../data/difficulties.js'

const router = express.Router()

router.get('/:name', (req, res) => {
  const difficulty = difficulties[req.params.name]

  if (!difficulty) {
    return res.status(404).json({ error: 'Difficulty not found' })
  }

  res.json(difficulty)
})

export default router
