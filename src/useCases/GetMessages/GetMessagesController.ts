import { Request, Response } from 'express'

export class GetAllInstitutionsController {
  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).send({ message: 'ok' })
    } catch (err) {
      return res.status(200).send({ error: err.message })
    }
  }
}
