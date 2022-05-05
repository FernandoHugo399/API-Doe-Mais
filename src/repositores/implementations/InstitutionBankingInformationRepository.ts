import { InstitutionBankingInformation } from '../../entities/InstitutionBankingInformation'
import { IInstitutionBankingInformationRepository } from '../IInstitutionBankingInformationRepository'
import { db } from '../../database'

export class InstitutionBankingInformationRepository implements IInstitutionBankingInformationRepository {
  public async findById (id: number): Promise<InstitutionBankingInformation> {
    const institutionBI = await db.query(`
    select * from instituicao
    inner join informacao_bancaria_instituicao
    on instituicao.id_instituicao = informacao_bancaria_instituicao.id_instituicao
    where instituicao.id_instituicao = $1
    `, [id])
    return institutionBI.rows[0]
  }
}
