import {IGeneralEntityProperties} from '../../interfaces'
export interface IMailLogsBody {
  recipients: string
  senderName: string
  senderEmail: string
}
export interface IMailLogsEntity extends IGeneralEntityProperties, IMailLogsBody {
}