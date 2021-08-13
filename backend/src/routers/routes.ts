
import { Router } from 'express'
import User from '../app/controller/User'

const routes = Router()

routes.post('/users', User.create)

export default routes
