import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import diaryRouter from './routes/diaries_routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json({ limit: '2500mb' }))
app.use('/api/diaries', diaryRouter)

export default app
