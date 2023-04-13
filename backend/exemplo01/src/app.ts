import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import { connectToMongoDB } from './configs/db'
import { usersRouter } from './routes/users'

connectToMongoDB()

export const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/users', usersRouter)

app.get('/', (req, res) => res.send('Blog API'))
