// import {SchemaTypeOpts, Schema, Document, model} from '../index'
import {SchemaTypeOpts, Schema, model, Document} from 'mongoose'
import {IMailLogsEntity} from '../../../../domain/entity/mailchimps'
export interface IMailChimpsCollectionModel extends IMailLogsEntity, Document {
  _id: any
}
const MailLogsCollectionModel:Record<keyof IMailLogsEntity, SchemaTypeOpts<any>> ={
  _id: {
    type: String,
    default: ''
  },
  recipients: {
    type: String,
    default: ''
  },
  senderName: {
    type: String,
    default: ''
  },
  senderEmail: {
    type: String,
    default: ''
  },
  updatedAt: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Number,
    default: 0
  },
}
const ModelSchema = new Schema(MailLogsCollectionModel)
ModelSchema.index({
  createdAt: -1
})
// sample
const MailChimpsCollectionModel = model<IMailChimpsCollectionModel>("mailer_logs", ModelSchema)
export default MailChimpsCollectionModel