import { connect, connection } from 'mongoose'

export const connectToMongoDB = async () => {
  await connect(`${process.env.MONGODB_URL}`)
}

connection.on('connected', () =>
  console.log(`Connected to db ${connection.db.databaseName}`)
)

connection.on('disconnected', () =>
  console.log(`Disconnected to db ${connection.db.databaseName}`)
)
