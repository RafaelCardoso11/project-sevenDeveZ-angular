
import { Request, Response } from 'express'

import UserController from './UserController'

class User {
  async create (req:Request, res:Response):Promise<Response> {
    const { name, email, password, phone, active } = req.body
    const create = await UserController.create(name, email, password, phone, active)
    return res.status(200).json({ create })
  }
}

export = new User();
