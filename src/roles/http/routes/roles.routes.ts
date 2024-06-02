// import { create } from 'domain'
import { Role } from '@roles/entities/role'
import { Router } from 'express'
//import { v4 as uuidv4 } from 'uuid'

const rouleRouter = Router()

const roles = []

rouleRouter.post('/', (req, res) => {
  const { name } = req.body

  const role = new Role()
  Object.assign(role, {
    name,
    create_at: new Date(),
  })

  roles.push(role)

  return res.status(201).json(role)
})

export { rouleRouter }
