
import { User } from '../models/UserSchema'

interface ReturnRequests {
  error:boolean;
  message:string
  // eslint-disable-next-line @typescript-eslint/ban-types
  User?: object
}

class UserController {
  async create (name:string, email:string, password:string, phone:string, active:string): Promise<ReturnRequests> {
    const CheckDates = await this.validator(name, email, password, phone)
    if (CheckDates !== false) {
      const checkEmailExist = await this.FindEmail(email)
      if (checkEmailExist !== false) {
        const UserCreate = await User.create({ name, email, password, phone, active })
        const UserSucessful = { _id: UserCreate.id, name: UserCreate.name, email: UserCreate.email, active: UserCreate.active }
        return { error: false, message: 'Sucessful!', User: UserSucessful }
      } else {
        return { error: true, message: 'este email já existe!' }
      }
    } else {
      return { error: true, message: 'Falta de Dados!' }
    }
  }

  async validator (name:string, email:string, password:string, phone:string) {
    if (name === undefined || name === null || name === '') { return false }
    if (email === undefined || email === null || email === '') { return false }
    if (password === undefined || password === null || password === '') { return false }
    if (phone === undefined || phone === null || phone === '') { return false }
    return true
  }

  async FindEmail (searchEmail:string):Promise<boolean> {
    const user = await User.findOne({ email: searchEmail })
    if (user !== null && user.email.length > 0) { return false }
    return true
  }
}

export = new UserController();
