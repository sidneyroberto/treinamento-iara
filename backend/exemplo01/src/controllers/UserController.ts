import { Request, Response } from 'express'
import { User, validateUser } from '../models/User'

export class UserController {
  async save(req: Request, res: Response) {
    const errorMessages = validateUser(req.body)

    if (errorMessages.length == 0) {
      const user = new User(req.body)
      const savedUser = await User.create(user)
      return res.status(201).json({ user: savedUser })
    }

    return res.status(400).json({ errorMessages })
  }
}
