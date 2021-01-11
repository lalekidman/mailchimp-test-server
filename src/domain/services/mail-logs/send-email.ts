import {
  MailChimpsEntity,
} from '../../'
import {
  IMailLogsRepositoryGateway,
  IMailLogsBody
} from '../../entity/mailchimps'
import { IGeneralInteractorDependencies } from '../../interfaces'
interface ISendEmail {
  (data: IMailLogsBody):  Promise<boolean>
}
interface IServiceDependencies extends IGeneralInteractorDependencies<IMailLogsRepositoryGateway>{
  send: ISendEmail
}
export class MailLogs {
  constructor (protected deps: IServiceDependencies) {
  }

  public sendMail = async (data: IMailLogsBody) => {
    try {
      const newMailLogEntity = new MailChimpsEntity({
        recipients: data.recipients,
        senderName: data.senderName,
        senderEmail: data.senderEmail
      })
      // const mailLogs = await this.deps.repositoryGateway.insertOne({
      //   _id: newMailLogEntity._id,
      //   senderEmail: newMailLogEntity.senderEmail,
      //   senderName: newMailLogEntity.senderName,
      //   email: newMailLogEntity.email,
      //   createdAt: newMailLogEntity.createdAt,
      //   updatedAt: newMailLogEntity.updatedAt,
      // })
      // return this.deps.send(data)
      return newMailLogEntity
    } catch (error) {
      throw error
    }
  }
}