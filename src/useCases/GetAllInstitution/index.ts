import { InstituionRepository } from '../../repositores/implementations/InstitutionRepository'
import { GetAllInstitutionUseCase } from './GetAllInstitutionUseCase'
import { GetAllInstitutionController } from './GetAllInstitutionController'

const instituionRepository = new InstituionRepository()
const getAllInstitutionUseCase = new GetAllInstitutionUseCase(instituionRepository)
export const getAllInstitutionController = new GetAllInstitutionController(getAllInstitutionUseCase)
