import GeneralRepository from './general'
import {
  IMailLogsBody,
  IMailLogsEntity,
  IMailLogsRepositoryGateway
} from '../../../domain/entity/mailchimps'
import MailLogsModel, {IMailChimpsCollectionModel} from './models/mailer'
export default class MailLogsRepository extends GeneralRepository<IMailChimpsCollectionModel, IMailLogsBody> implements IMailLogsRepositoryGateway {
  constructor () {
    super(MailLogsModel)
  }
}