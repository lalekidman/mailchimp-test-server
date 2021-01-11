import {
  MailChimpsEntity
} from '../'
interface ISendEmail {
  send(data: IEmailData):  Promise<boolean>
}
interface IEmailData {
  email: string|string[]
  content: string
}
export class SendEmail {
  constructor (protected deps: ISendEmail) {

  }

  public sendMail (data: IEmailData) {
    return this.deps.send(data)
  }
}