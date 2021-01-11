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
}
export class MailLogsList {
  constructor (protected deps: IServiceDependencies) {
  }

  public getList = async (query?: any) => {
    try {
      return this.deps.repositoryGateway.findAll()
    } catch (error) {
      throw error
    }
  }
}