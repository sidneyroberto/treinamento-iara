import dotenv from 'dotenv'
dotenv.config()

import { connectToMongoDB } from './configs/db'
import { IUser, User } from './models/User'

connectToMongoDB()
  .then(async () => {
    const user: IUser = {
      birthday: new Date(),
      email: 'fulano@email.com',
      name: 'Fulano da Silva',
      password: 'fulano123',
    }

    const savedUser = await User.create(user)
    console.log(savedUser)
  })
  .catch((err) => console.log(err))
