import { IInstitutionRepository } from './../IInstitutionRepository'
import { db } from '../../database'
import { Institution } from '../../entities/Institution'

export class InstituionRepository implements IInstitutionRepository {
  public async findByEmail (email: string): Promise<Institution> {
    const institution = await db.query('select * from instituicao where email = $1', [email])
    return institution.rows[0]
  }

  public async findAll (): Promise<Institution[]> {
    const institutions = await db.query('select * from instituicao')
    return institutions.rows
  }
}
