import { Router } from 'express'
import { getAllInstitutionController } from './useCases/GetAllInstitution/index'
import { getOneInstitutionController } from './useCases/GetOneInstitution/index'
import { getInstitutionBankingInformationController } from './useCases/GetInstitutionBankingInformation/index'

export const router = Router()

router.get('/institution', (req, res) => {
  return getAllInstitutionController.handle(req, res)
})

router.get('/institution/:id', (req, res) => {
  return getOneInstitutionController.handle(req, res)
})

router.get('/institution-information/:id', (req, res) => {
  return getInstitutionBankingInformationController.handle(req, res)
})
