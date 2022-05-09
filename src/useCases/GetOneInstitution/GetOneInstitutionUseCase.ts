import { IInstitutionRepository } from '../../repositores/IInstitutionRepository'

export class GetOneInstitutionUseCase {
  private institutionRepository!: IInstitutionRepository

  constructor (institutionRepository: IInstitutionRepository) {
    this.institutionRepository = institutionRepository
  }

  public async execute (id: number) {
    if (!id) throw new Error('Use a valid id!')

    const institution = await this.institutionRepository.findById(id)

    if (!institution) throw new Error('Institution not found!')

    return institution
  }
}
