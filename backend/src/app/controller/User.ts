
import { Request, Response } from 'express'

import UserController from './UserController'

class User {
  async createU (req:Request, res:Response):Promise<Response> {
    const { name, email, password, phone } = req.body
    const User = await UserController.create(name, email, password, phone)
    return res.status(200).json(User)
  }

  async EditU (req:Request, res:Response):Promise<Response> {
    const { _id, name, email, phone } = req.body
    const data = { name, email, phone }
    const UserEditU = await UserController.userEdit(_id, data)
    return res.status(200).json(UserEditU)
  }

  async deleteU (req:Request, res:Response):Promise<Response> {
    const { _id } = req.body
    const UserDelet = await UserController.userDelet(_id)
    return res.status(200).json(UserDelet)
  }

  async login (req:Request, res:Response):Promise<Response> {
    const { email, password } = req.body
    const Userlogin = await UserController.Login(email, password)
    return res.status(200).json(Userlogin)
  }
}

export = new User();
