import { IInstitutionRepository } from '../../repositores/IInstitutionRepository'

export class GetOneInstitutionUseCase {
  private institutionRepository!: IInstitutionRepository

  constructor (institutionRepository: IInstitutionRepository) {
    this.institutionRepository = institutionRepository
  }

  public async execute (id: number) {
    if (!id) throw new Error('id is undefined')

    return this.institutionRepository.findById(id)
  }
}
