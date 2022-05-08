import { GetAllInstitutionUseCase } from './GetAllInstitutionUseCase'
import { Request, Response } from 'express'

export class GetAllInstitutionController {
  private getAllInstitutionUseCase!: GetAllInstitutionUseCase

  constructor (getAllInstitutionUseCase: GetAllInstitutionUseCase) {
    this.getAllInstitutionUseCase = getAllInstitutionUseCase
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const institutuions = await this.getAllInstitutionUseCase.execute()
      return res.status(200).send({ institutuions })
    } catch (err) {
      return res.status(200).send({ error: 'An error as occurred: ' + err })
    }
  }
}
