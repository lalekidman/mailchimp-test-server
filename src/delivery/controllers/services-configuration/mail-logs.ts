import {
  MailLogs
} from '../../../domain/services/mail-logs'

import MailChimp from '../../helpers/mailer/mailchimps'

import MailLogsRepository from '../../../app-plugins/persistence/repositories/mail-logs'

export const mailLogs = () => (
  new MailLogs({
    repositoryGateway: new MailLogsRepository(),
    send: MailChimp
  })
)