import { Message } from '../../entities/message'
import { db } from './../../database/index'
import { IMessageRepository } from './../IMessageRepository'

export class MessageRepository implements IMessageRepository {
  public async findAll (): Promise<Message[]> {
    const messages = await db.query('select * from mensagem')
    return messages.rows
  }

  public async saveMessage (message: Message): Promise<void> {
    await db.query('insert into mensagem(id_mensagem, nome, email, telefone, mensagem) values ($1, $2, $3, $4, $5)',
      [message.id_mensagem || 'default', message.nome, message.email, message.telefone, message.mensagem])
  }
}
