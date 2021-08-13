import { Schema, Model, model, Document } from 'mongoose'
import { hash, genSalt } from 'bcrypt'
import isEmail from 'validator/lib/isEmail'

export interface UserInterface {
    name: string
    email: string
    password: string
    active: string
    phone?: string

  }

export interface UserModel extends UserInterface, Document {

  }

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters']
  },
  name: {
    type: String,
    required: [true, 'Please enter Your Name']
  },
  phone: {
    type: String,
    required: [true, 'Please enter a phone'],
    minlength: [7, 'Minimum phone length is 6 characters']
  },
  active: Boolean
}, {
  timestamps: true
})

export interface IUser extends Document {
  password: string
}
UserSchema.pre<IUser>('save', async function (next) {
  const salt = await genSalt(12)
  this.password = await hash(this.password, salt)
  next()
})

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
