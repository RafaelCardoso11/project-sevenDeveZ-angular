
import { Router } from 'express'
import User from '../app/controller/User'

const routes = Router()

routes.post('/user', User.createU)
routes.delete('/user', User.deleteU)
routes.put('/user', User.EditU)
routes.post('/login', User.login)

routes.get('/user', User.FindUserProfile) // testar na hora com jwt apos ou antes essa validação

export default routes
