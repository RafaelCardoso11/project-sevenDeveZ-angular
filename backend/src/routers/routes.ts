
import { Router } from 'express'
import User from '../app/controller/User/User'
import isAuthenticated from '../middleware/auth'

const routes = Router()

routes.post('/user', User.createU)
routes.post('/login', User.login)

routes.get('/users', isAuthenticated, User.FindUserProfile) // testar na hora com jwt apos ou antes essa validação
routes.put('/user', isAuthenticated, User.EditU)
routes.delete('/user', User.deleteU)
export default routes
