import { Router } from 'express'
import { getAllInstitutionsController } from './useCases/GetAllInstitutions/index'
import { getOneInstitutionController } from './useCases/GetOneInstitution/index'
import { getInstitutionBankingInformationController } from './useCases/GetInstitutionBankingInformation/index'

export const router = Router()

router.get('/institutions', (req, res) => {
  return getAllInstitutionsController.handle(req, res)
})

router.get('/institution/:id', (req, res) => {
  return getOneInstitutionController.handle(req, res)
})

router.get('/institution-information/:id', (req, res) => {
  return getInstitutionBankingInformationController.handle(req, res)
})
