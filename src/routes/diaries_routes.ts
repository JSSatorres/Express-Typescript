import { Router } from 'express'

const diaryRouter = Router()

diaryRouter.get('/', (_req, res) => {
  res.send('hi')
})
diaryRouter.post('/', (_req, res) => {
  res.send('hi post')
})
export default diaryRouter
