import { Institution } from '../entities/Institution'

export interface IInstitutionRepository{
    findByEmail(email: string): Promise<Institution>
    findAll(): Promise<Institution[]>
}
