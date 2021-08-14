
import { Request, Response } from 'express'

import UserController from './UserController'

class User {
  async FindUserProfile (req:Request, res:Response):Promise<Response> {
    const { _id } = req.body
    const UserFind = await UserController.findUser(_id)
    if (UserFind.error !== true) {
      return res.status(200).json(UserFind)
    } else {
      return res.status(400).json(UserFind)
    }
  }

  async createU (req:Request, res:Response):Promise<Response> {
    const { name, email, password, phone } = req.body
    const User = await UserController.create(name, email, password, phone)
    if (User.error !== true) {
      return res.status(200).json(User)
    } else {
      return res.status(401).json(User)
    }
  }

  async EditU (req:Request, res:Response):Promise<Response> {
    const { _id, name, email, phone } = req.body
    const data = { name, email, phone }
    const UserEditU = await UserController.userEdit(_id, data)
    if (UserEditU.error !== true) {
      return res.status(200).json(User)
    } else {
      return res.status(400).json(User)
    }
  }

  async deleteU (req:Request, res:Response):Promise<Response> {
    const { _id } = req.body
    const UserDelet = await UserController.userDelet(_id)
    if (UserDelet.error !== true) {
      return res.status(200).json(User)
    } else {
      return res.status(406).json(User)
    }
  }

  async login (req:Request, res:Response):Promise<Response> {
    const { email, password } = req.body
    const Userlogin = await UserController.Login(email, password)
    if (Userlogin.error !== true) {
      return res.status(200).json(User)
    } else {
      return res.status(401).json(User)
    }
  }
}

export = new User();
