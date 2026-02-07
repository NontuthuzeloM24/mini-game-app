import express from 'express'
import { levels } from '../data/levels.js'

const router = express.Router()

router.get('/', (req, res) => {
  const summary = levels.map(level => ({
    id: level.id,
    difficulty: level.difficulty,
    gridSize: level.gridSize,
    timeLimit: level.timeLimit
  }))
  res.json(summary)
})

router.get('/:id', (req, res) => {
  const level = levels.find(l => l.id === req.params.id)

  if (!level) {
    return res.status(404).json({ error: 'Level not found' })
  }

  res.json(level)
})

export default router
