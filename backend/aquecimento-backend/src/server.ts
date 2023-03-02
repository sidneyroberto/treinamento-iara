import express from 'express'
import cors from 'cors'
import logger from 'morgan'

const app = express()

// Middleware

// Libera o acesso aos nossos serviços para qualquer outro app
app.use(cors())

// Exibe logs mais detalhados
app.use(logger('dev'))

app.get('/pi', (req, res) => {
  const pi = Math.PI
  return res.status(200).json({ pi })
})

app.get('/soma/:num1/:num2', (req, res) => {
  //const n1 = req.params.num1
  //const n2 = req.params.num2
  const { num1, num2 } = req.params
  const n1 = Number(num1)
  const n2 = Number(num2)

  if (!isNaN(n1) && !isNaN(n2)) {
    const soma = n1 + n2
    return res.status(200).json({ resultado: soma })
  }

  return res
    .status(400)
    .json({ mensagem: 'Os dois valores precisam ser numéricos' })
})

app.get('/subtracao', (req, res) => {
  const { num1, num2 } = req.query
  const n1 = Number(num1)
  const n2 = Number(num2)

  if (!isNaN(n1) && !isNaN(n2)) {
    const subtracao = n1 - n2
    return res.status(200).json({ resultado: subtracao })
  }

  return res
    .status(400)
    .json({ mensagem: 'Os dois valores precisam ser numéricos' })
})

app.get('/', (req, res) => {
  return res.status(200).send('Oi! Tudo bem? Eu to bem!')
})

app.listen(3000, () => console.log('App running'))
