import { Router } from 'express'
import { UserController } from '../controllers/UserController'

export const usersRouter = Router()
const userCtrl = new UserController()

usersRouter.post('/', (req, res) => userCtrl.save(req, res))
