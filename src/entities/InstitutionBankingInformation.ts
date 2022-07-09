/* eslint-disable camelcase */
export class InstitutionBankingInformation {
  public readonly id_dados?: number
  public banco_pix_1!: string
  public pix_1!: string
  public qr_code_pix_1!: string
  public banco_pix_2?: string
  public pix_2?: string
  public qr_code_pix_2?: string
  public banco_1!: string
  public agencia_banco_1!: string
  public conta_banco_1!: string
  public tipo_conta_1!: string
  public banco_2?: string
  public agencia_banco_2?: string
  public conta_banco_2?: string
  public tipo_conta_2?: string
  public id_instituicao!: number
  public logo!: string
  public sobre_curto!: string
  public localizacao!: string
  public nome!: string

  constructor (props: InstitutionBankingInformation) {
    Object.assign(this, props)
  }
}
