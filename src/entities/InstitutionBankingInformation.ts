/* eslint-disable camelcase */
export class InstitutionBankingInformation {
    public id_dados!: number
    public banco_pix_1!: string
    public pix_1!: string
    public qr_code_pix_1!: string
    public banco_pix_2?: string
    public pix_2?: string
    public qr_code_pix_2?: string
    public banco_1!: string
    public agencia_banco_1!: number
    public conta_banco_1!: number
    public banco_2?: string
    public agencia_banco_2?: number
    public conta_banco_2?: number
    public id_instituicao!: number
}