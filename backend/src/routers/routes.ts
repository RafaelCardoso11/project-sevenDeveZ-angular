
import { Router } from 'express'
import User from '../app/controller/User'

const routes = Router()

routes.post('/users', User.createU)
routes.delete('/users', User.deleteU)
routes.put('/users', User.EditU)
routes.post('/login', User.login)

export default routes
