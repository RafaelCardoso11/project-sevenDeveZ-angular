import { Schema, Model, model, Document } from 'mongoose'

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
    unique: true
  },
  password: String,
  name: String,
  phone: Number,
  active: Boolean
}, {
  timestamps: true
})

export const User: Model<UserModel> = model<UserModel>('User', UserSchema)
