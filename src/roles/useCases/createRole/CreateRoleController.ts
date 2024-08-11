import { Request, Response } from 'express'

export class CreateRoleController {
  handle(req: Request, res: Response) {
    res.send('Role criada sucesso!')
  }
}
