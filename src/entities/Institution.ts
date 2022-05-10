/* eslint-disable camelcase */
export class Institution {
  public readonly id_instituicao?: number
  public nome!: string
  public logo!: string
  public email!: string
  public localizacao!: string
  public telefone_1!: number
  public telefone_2?: number
  public cpf_responsavel!: number
  public cnpj?: number
  public website!: number
  public sobre!: string
  public sobre_curto!: string

  constructor (props: Institution) {
    Object.assign(this, props)
  }
}
