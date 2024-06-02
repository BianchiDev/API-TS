import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from './errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

// Middleware de tratamento de erros
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.error(error) // Alterado para console.error para destacar um erro interno

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

// Correção da sintaxe da função de callback no listen
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`)
})
