
import { User } from '../models/UserSchema'

interface ReturnRequests {
  error:boolean;
  message:string
  // eslint-disable-next-line @typescript-eslint/ban-types
  User?: object
}

class UserController {
  public async create (name:string, email:string, password:string, phone:string): Promise<ReturnRequests> {
    const CheckDates = await this.validator(name, email, password, phone)
    if (CheckDates !== false) {
      const checkEmailExist = await this.FindEmail(email)
      if (checkEmailExist !== false) {
        try {
          const UserCreate = await User.create({ name, email, password, phone, active: true })
          const UserSucessful = { _id: UserCreate.id, name: UserCreate.name, email: UserCreate.email, active: UserCreate.active }
          return { error: false, message: 'Sucessful!', User: UserSucessful }
        } catch (error) {
          return { error: false, message: error.message }
        }
      } else {
        return { error: true, message: 'este email já existe!' }
      }
    } else {
      return { error: true, message: 'Falta de Dados!' }
    }
  }

  private async validator (name:string, email:string, password:string, phone:string):Promise<boolean> {
    if (name === undefined || name === null || name === '') { return false }
    if (email === undefined || email === null || email === '') { return false }
    if (password === undefined || password === null || password === '') { return false }
    if (phone === undefined || phone === null || phone === '') { return false }
    return true
  }

  private async FindEmail (searchEmail:string):Promise<boolean> {
    const user = await User.findOne({ email: searchEmail })
    if (user !== null && user.email.length > 0) { return false }
    return true
  }

  public async userDelet (_id:string): Promise<ReturnRequests> {
    if (_id === undefined || _id === null || _id === '') { return { error: true, message: 'Falta de Dados!' } }
    // eslint-disable-next-line @typescript-eslint/ban-types
    const update:object = { active: false }
    try {
      const userUpdate = await User.findByIdAndUpdate(_id, update)
      const UserSucessful = { _id: userUpdate.id, name: userUpdate.name, email: userUpdate.email, active: userUpdate.active }
      return { error: false, message: 'Inactive Sucessful!', User: UserSucessful }
    } catch (error) {
      return { error: true, message: error.message }
    }
  }
}

export = new UserController();
