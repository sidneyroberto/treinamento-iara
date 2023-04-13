import EmailValidator from 'email-validator'
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

export const validateUser = (userObj: any): string[] => {
  const errorMessages: string[] = []
  const { name, email, birthday, password } = userObj

  if (!name || name.length < 5) {
    errorMessages.push(
      'Name cannot be empty and must have at least 5 characters'
    )
  }

  if (!EmailValidator.validate(email)) {
    errorMessages.push('Invalid email')
  }

  if (!birthday.match(/^\d{4}-\d{2}-\d{2}$/)) {
    errorMessages.push('Invalid birthday format. Valid format: yyyy-mm-dd')
  } else {
    const birthdayObj = new Date(birthday)
    if (birthday >= new Date()) {
      errorMessages.push('Birthday must be in the past')
    }
  }

  if (
    !password ||
    password.length < 8 ||
    !/[A-Z]/g.test(password) ||
    !/[0-9]/g.test(password)
  ) {
    errorMessages.push(
      'Password must contain at least 8 characteres,' +
        '1 uppercase character, and 1 digit'
    )
  }

  return errorMessages
}

export const User = model('User', schema)
