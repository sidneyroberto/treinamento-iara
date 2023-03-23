import dotenv from 'dotenv'

// Carrega as variáveis de ambiente
dotenv.config()

import { app } from './app'
import { connection } from 'mongoose'

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () =>
  console.log(`App running on port ${PORT}`)
)

const events = ['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGTERM']
events.forEach((e) => {
  process.on(e, () => {
    server.close()
    console.log('App finished')
    connection.close()
  })
})
