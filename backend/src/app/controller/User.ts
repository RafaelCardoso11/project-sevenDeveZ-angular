
import { Request, Response } from 'express'

import UserController from './UserController'

class User {
  async createU (req:Request, res:Response):Promise<Response> {
    const { name, email, password, phone } = req.body
    const User = await UserController.create(name, email, password, phone)
    return res.status(200).json({ User })
  }

  /*  async EditU (req:Request, res:Response):Promise<Response> {
    const { _id } = req.body

  } */

  async deleteU (req:Request, res:Response):Promise<Response> {
    const { _id } = req.body
    const UserDelet = await UserController.userDelet(_id)
    return res.status(200).json({ UserDelet })
  }
}

export = new User();
