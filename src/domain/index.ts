import uuid from 'uuid/v4'
import MailChimps from './entity/mailchimps'
export const MailChimpsEntity = MailChimps({
  generateId: uuid
})