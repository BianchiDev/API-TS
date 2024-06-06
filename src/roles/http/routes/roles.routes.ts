import { RolesRepository } from '@roles/repositories/rolesRepository'
import { Router } from 'express'

const rouleRouter = Router()
const rolesRepository = new RolesRepository()

rouleRouter.post('/', (req, res) => {
  const { name } = req.body
  const role = rolesRepository.create({ name })

  return res.status(201).json(role)
})

rouleRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()

  return res.json(roles)
})
export { rouleRouter }
