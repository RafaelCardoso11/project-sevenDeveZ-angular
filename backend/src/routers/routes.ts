import { Router } from 'express'
import QuestionCrontroller from '../app/controller/Question/QuestionCrontroller'

import UserController from '../app/controller/User/UserController'
import isAuthenticated from '../middleware/auth'

const routes = Router()

routes.post('/user', UserController.createU)
routes.post('/login', UserController.login)

routes.get('/users', isAuthenticated, UserController.FindUserProfile) // testar na hora com jwt apos ou antes essa validação
routes.put('/user', isAuthenticated, UserController.EditU)
routes.delete('/user', isAuthenticated, UserController.deleteU)

routes.get('/questions', QuestionCrontroller.FindAllz)
routes.post('/question', isAuthenticated, QuestionCrontroller.create)
routes.put('/question', QuestionCrontroller.Edit)
routes.delete('/question', QuestionCrontroller.DeleteQ)
routes.get('/question/:_id', QuestionCrontroller.FindOn)

routes.use((req, res) => {
  res.status(404).json({ error: 'true', message: 'router not found' })
})
export default routes
