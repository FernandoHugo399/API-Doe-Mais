/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { SaveMessageUseCase } from './SaveMessageUseCase'

export class SaveMessageController {
  private saveMessageUseCase!: SaveMessageUseCase

  constructor (SaveMessageUseCase: SaveMessageUseCase) {
    this.saveMessageUseCase = SaveMessageUseCase
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      console.log(req.body)
      const { nome, email, telefone, mensagem } = req.body
      console.log(nome)
      if (!email || !mensagem || !nome || !telefone) throw new Error('Todos os campos não foram preenchidos')

      await this.saveMessageUseCase.execute({ nome, email, mensagem, telefone })

      return res.status(200).send({ message: 'Mensagem enviada com sucesso!' })
    } catch (err) {
      return res.status(200).send({ error: err.message })
    }
  }
}
