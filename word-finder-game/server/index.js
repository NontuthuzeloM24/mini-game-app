import express from 'express'
import cors from 'cors'
import levelsRoutes from './routes/levels.routes.js'
import difficultyRoutes from './routes/difficulty.routes.js'

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.use('/api/levels', levelsRoutes)
app.use('/api/difficulty', difficultyRoutes)

app.get('/', (req, res) => {
  res.send('Word Finder API is running')
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
