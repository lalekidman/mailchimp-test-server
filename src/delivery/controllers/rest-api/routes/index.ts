import {Request, Response, NextFunction, Router} from 'express'
import * as HttpStatus from 'http-status-codes'
// import { requestParamsValidatorMiddleware } from '../../helpers'
// import { IndexPostValidationPipeline } from '../../validator'
const ROOT_DIR = `/../../../../..`
// import MailLogsModel, {IMailChimpsCollectionModel} from '../../../../app-plugins/persistence/repositories/models/mailer'
import {
  mailLogs,
  mailLogsList
} from '../../services-configuration/mail-logs'
export default class _Router {
  /**
   * @class initiate router class
   */
  private readonly router: Router
  constructor () {
    this.router = Router({mergeParams: true})
  }
  private viewRoute = (req: Request, res: Response, next: NextFunction) => {
    mailLogsList()
    .getList()
    .then((data) => {
      res.status(HttpStatus.OK).send({
        success: true,
        result: data,
        error: []
      })
    })
    .catch((err) => {
      res.status(HttpStatus.BAD_REQUEST).send({
        success: false,
        result: null,
        error: [err.message]
      })
    })
  }
  private sendEmail = async (req: Request, res: Response, next: NextFunction) => {
    res.end()
    try {
      console.log('req.body :>> ', req.body);
      const q = await mailLogs()
        .sendMail(req.body)
    } catch (error) {
      console.error('error :>> ', error);
    }
  }
  public expose () {
    this.router.post('/',
      this.sendEmail
    )
    this.router.get('/',
      this.viewRoute
    )
    return this.router
  }
}