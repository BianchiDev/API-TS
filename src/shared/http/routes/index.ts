import { Router } from 'express'
import { AppError } from '../errors/AppError'

const routes = Router()

routes.get('/', (req, res) => {
  throw new AppError('Acesso negado', 401)
  return res.json({ message: 'Olá dev!' })
})

export { routes }
