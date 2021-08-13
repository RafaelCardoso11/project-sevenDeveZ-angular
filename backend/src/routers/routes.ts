
import { Router } from 'express'
import User from '../app/controller/User'

const routes = Router()

routes.post('/users', User.createU)
routes.delete('/users', User.deleteU)

export default routes
