import { Router } from 'express'
import { getAllInstitutionController } from './useCases/GetAllInstitution/index'
import { getOneInstitutionController } from './useCases/GetOneInstitution'

export const router = Router()

router.get('/institution', (req, res) => {
  return getAllInstitutionController.handle(req, res)
})

router.get('/institution/:id', (req, res) => {
  return getOneInstitutionController.handle(req, res)
})
