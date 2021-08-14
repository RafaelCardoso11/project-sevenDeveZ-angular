import isEmail from 'validator/lib/isEmail'
import { sign } from 'jsonwebtoken'
import { User } from '../models/UserSchema'

interface ReturnRequests {
  error:boolean
  message:string
  // eslint-disable-next-line @typescript-eslint/ban-types
  User?: object
  Token?:string
}
 interface EditInterface {
  name:string
  email:string
  phone:string
}

class UserController {
  public async findUser (_id:string): Promise<ReturnRequests> {
    if (_id === undefined || _id === null || _id === '') { return { error: true, message: '_id Inexistente' } }
    const OneUser = await User.findById({ _id }, {
      password: 0
    })
    return { error: false, message: 'Sucessful!', User: OneUser }
  }

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
          return { error: true, message: error.message }
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

  public async userEdit (_id:string, data:EditInterface): Promise<ReturnRequests> {
    try {
      const UserFind = await User.findById(_id)
      UserFind.name = data.name || UserFind.name
      UserFind.phone = data.phone || UserFind.phone
      UserFind.email = data.email || UserFind.email
      await UserFind.save()
      return { error: false, message: 'Update Sucessful', User: UserFind }
    } catch (error) {
      return { error: true, message: error.message }
    }
  }

  public async Login (email:string, password:string): Promise<ReturnRequests> {
    if (email !== undefined && isEmail(email) === true) {
      if (password !== undefined && password !== '') {
        const userLogin = await User.findOne({ email })
        try {
          const Passok = await userLogin.comparePassword(password)
          const token = sign({ _id: userLogin._id }, process.env.JWT, { expiresIn: '1day' })
          const UserSucessful = { _id: userLogin.id, name: userLogin.name, email: userLogin.email, active: userLogin.active }
          if (Passok) {
            return { error: false, message: 'Token Gerado Com Sucesso', User: UserSucessful, Token: token }
          } else {
            return { error: true, message: 'Senha incorreta!' }
          }
        } catch (error) {
          return { error: true, message: 'Senha incorreta!' }
        }
      } else {
        return { error: true, message: 'Falta de Dados!' }
      }
    } else {
      return { error: true, message: 'Falta de Dados!' }
    }
  }
}
export = new UserController();
