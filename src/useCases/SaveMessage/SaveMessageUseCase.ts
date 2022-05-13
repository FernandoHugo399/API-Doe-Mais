import { IMailProvider } from './../../providers/IMailProvider'
import { IMessageRepository } from '../../repositores/IMessageRepository'
import { ISaveMessageDTO } from './SaveMessageDTO'

export class SaveMessageUseCase {
    private mailProvider!: IMailProvider
    private messageRepository!: IMessageRepository

    constructor (MailProvider: IMailProvider, MessageRepository: IMessageRepository) {
      this.mailProvider = MailProvider
      this.messageRepository = MessageRepository
    }

    public async execute (message: ISaveMessageDTO) {
      if (isNaN(message.telefone)) throw new Error('Preencha apenas números no campo "telefone"')

      if (!message.email || !message.mensagem || !message.nome || !message.telefone) throw new Error('Todos os campos não foram preenchidos')

      await this.messageRepository.saveMessage(message)

      await this.mailProvider.sendMail({
        from: {
          email: '40657f960f-5d8abe+1@inbox.mailtrap.io',
          name: 'Hugo Fernando'
        },
        to: {
          email: message.email,
          name: message.nome
        },
        subject: 'Olá ' + message.nome,
        body: '<p>Sua mensagem foi enviada com sucesso</p>'
      })
    }
}
