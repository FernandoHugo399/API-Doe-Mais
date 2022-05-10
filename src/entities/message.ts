/* eslint-disable camelcase */
export class Message {
  public readonly id_mensagem?: number
  public nome!: string
  public email!: string
  public telefone!: string
  public mensagem!: string
  public data_mensagem?: string

  constructor (props: Message) {
    Object.assign(this, props)
  }
}
