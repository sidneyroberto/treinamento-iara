import { Schema, model } from 'mongoose'

export interface IUser {
  name: string
  email: string
  password: string
  birthday: Date
}

const schema = new Schema<IUser>({
  birthday: { type: Date },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: { type: String, required: true },
  password: { type: String, required: true },
})

export const User = model('User', schema)
