import { Router } from 'express'
import { getDiaries } from '../controllers/diaries_controllers'

const diaryRouter = Router()

diaryRouter.get('/', getDiaries)
// diaryRouter.get('/:id', findById)
// diaryRouter.get('/', getNonSensitiveEntries)
export default diaryRouter
