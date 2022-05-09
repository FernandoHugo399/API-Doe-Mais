import { IInstitutionBankingInformationRepository } from '../../repositores/IInstitutionBankingInformationRepository'

export class GetInstitutioBankingInformationUseCase {
  private institutionBankingInformationRepository!: IInstitutionBankingInformationRepository

  constructor (institutionBankingInformationRepository: IInstitutionBankingInformationRepository) {
    this.institutionBankingInformationRepository = institutionBankingInformationRepository
  }

  public async execute (id: number) {
    if (!id) throw new Error('Use a valid id!')

    const institutionInformation = await this.institutionBankingInformationRepository.findById(id)

    if (!institutionInformation) throw new Error('Informations not found!')

    return institutionInformation
  }
}
