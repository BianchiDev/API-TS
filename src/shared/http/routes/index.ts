import { Router } from 'express'
import { rouleRouter } from '@roles/http/routes/roles.routes'
const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá dev!' })
})

routes.use('/roles', rouleRouter)

export { routes }
